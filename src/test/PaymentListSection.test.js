import { describe, it, expect } from '@jest/globals';
import { mount, shallowMount } from '@vue/test-utils';
import PaymentListSection from '../views/PaymentListSection.vue';

describe('PaymentListSection.vue', () => {
  const mockStore = {
    state: {
      payments: {
        list: [
          {
            id: 'pay_001',
            userId: 1,
            amount: 1500,
            status: 'completed',
            category: 'payment',
            description: 'Monthly payment'
          },
          {
            id: 'pay_002',
            userId: 2,
            amount: 750,
            status: 'pending',
            category: 'refund',
            description: 'Product refund'
          }
        ]
      },
      users: {
        list: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        ]
      }
    },
    commit: jest.fn()
  };

  it('component mounts and has correct data', () => {
    const wrapper = shallowMount(PaymentListSection, {
      global: {
        mocks: { $store: mockStore },
        stubs: ['PaymentTable']
      }
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.vm.payments).toHaveLength(2);
    expect(wrapper.vm.users).toHaveLength(2);
  });

  it('filters payments correctly', () => {
    const wrapper = shallowMount(PaymentListSection, {
      global: {
        mocks: { $store: mockStore },
        stubs: ['PaymentTable']
      }
    });

    wrapper.setData({ q: 'monthly' });
    
    const filteredPayments = wrapper.vm.filtered;
    expect(filteredPayments.length).toBe(1);
    expect(filteredPayments[0].description).toContain('Monthly');
  });
});
