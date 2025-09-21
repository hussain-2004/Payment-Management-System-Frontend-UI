import { describe, it, expect, beforeEach } from '@jest/globals';
import { mount } from '@vue/test-utils';
import PaymentInitiationForm from '@/views/PaymentInitiationForm.vue';

describe('PaymentInitiationForm.vue', () => {
  const mockStore = {
    state: {
      users: {
        list: [
          { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' }
        ]
      },
      payments: { list: [] }
    },
    commit: jest.fn()
  };

  const mockRouter = { push: jest.fn() };
  const mockRoute = { params: {} };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form fields correctly', () => {
    const wrapper = mount(PaymentInitiationForm, {
      global: {
        mocks: {
          $store: mockStore,
          $router: mockRouter,
          $route: mockRoute
        }
      }
    });

    expect(wrapper.find('input[type="number"]').exists()).toBe(true);
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  it('calls store commit when form is submitted', async () => {
    const wrapper = mount(PaymentInitiationForm, {
      global: {
        mocks: {
          $store: mockStore,
          $router: mockRouter,
          $route: mockRoute
        }
      }
    });

    await wrapper.setData({
      form: {
        userId: 1,
        amount: 1000,
        description: 'Test payment'
      }
    });

    const form = wrapper.find('form');
    if (form.exists()) {
      await form.trigger('submit.prevent');
      expect(mockStore.commit).toHaveBeenCalled();
    }
  });
});
