import { describe, it, expect } from '@jest/globals';
import { mount, shallowMount } from '@vue/test-utils';
import DashboardPage from '../views/DashboardPage.vue';

describe('DashboardPage.vue', () => {
  const mockStore = {
    state: {
      users: {
        list: [
          { id: 1, name: 'John Doe', status: 'active' },
          { id: 2, name: 'Jane Smith', status: 'inactive' }
        ]
      },
      payments: {
        list: [
          { id: 'pay_001', amount: 1500, status: 'completed' },
          { id: 'pay_002', amount: 750, status: 'pending' }
        ]
      }
    }
  };

  it('component mounts without errors', () => {
    const wrapper = shallowMount(DashboardPage, {
      global: {
        mocks: { $store: mockStore },
        stubs: ['StatsCard', 'RecentPayments']
      }
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.vm.users).toHaveLength(2);
    expect(wrapper.vm.payments).toHaveLength(2);
  });

  it('calculates statistics correctly', () => {
    const wrapper = shallowMount(DashboardPage, {
      global: {
        mocks: { $store: mockStore },
        stubs: ['StatsCard', 'RecentPayments']
      }
    });

    expect(wrapper.vm.activeUsers).toBe(1);
    expect(wrapper.vm.totalAmountCompleted).toBe('1500.00');
    expect(wrapper.vm.pendingCount).toBe(1);
  });
});
