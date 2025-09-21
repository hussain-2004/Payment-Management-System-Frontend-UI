import { describe, it, expect } from '@jest/globals';
import { mount } from '@vue/test-utils';
import PaymentDetailsInformation from '@/views/PaymentDetailsInformation.vue';

describe('PaymentDetailsInformation.vue', () => {
  const mockRoute = { params: { id: 'pay_001' } };
  
  const mockStore = {
    state: {
      payments: {
        list: [
          {
            id: 'pay_001',
            userId: 1,
            amount: 2500,
            status: 'completed',
            category: 'payment',
            reference: 'REF456',
            description: 'Monthly subscription',
            currency: 'INR',
            createdAt: '2024-01-20T10:30:00'
          }
        ]
      },
      users: {
        list: [
          { 
            id: 1, 
            name: 'Alice Smith', 
            email: 'alice@example.com'
          }
        ]
      }
    }
  };

  it('displays payment information correctly', () => {
    const wrapper = mount(PaymentDetailsInformation, {
      global: {
        mocks: {
          $route: mockRoute,
          $store: mockStore
        }
      }
    });

    expect(wrapper.text()).toContain('pay_001');
    expect(wrapper.text()).toContain('₹2500'); 
    expect(wrapper.text()).toContain('Monthly subscription');
  });

  it('displays user information when available', () => {
    const wrapper = mount(PaymentDetailsInformation, {
      global: {
        mocks: {
          $route: mockRoute,
          $store: mockStore
        }
      }
    });

    expect(wrapper.text()).toContain('Alice Smith');
    expect(wrapper.vm.payment).toBeDefined();
    expect(wrapper.vm.payment.id).toBe('pay_001');
  });
});
