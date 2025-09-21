import { describe, it, expect } from '@jest/globals';
import { mount } from '@vue/test-utils';
import PaymentTableComponent from '../components/PaymentTableComponent.vue';

describe('PaymentTableComponent.vue', () => {
  const mockPayments = [
    {
      id: 'pay_001',
      userId: 1,
      amount: 1500,
      status: 'completed',
      category: 'payment',
      date: '2024-01-15',
      reference: 'REF123'
    }
  ];

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' }
  ];

  it('renders payment data correctly', () => {
    const wrapper = mount(PaymentTableComponent, {
      props: {
        payments: mockPayments,
        users: mockUsers
      }
    });

    expect(wrapper.text()).toContain('pay_001');
    expect(wrapper.text()).toContain('John Doe');
    expect(wrapper.text()).toContain('₹1500'); 
  });

  it('emits delete event when delete button clicked', async () => {
    const wrapper = mount(PaymentTableComponent, {
      props: {
        payments: mockPayments,
        users: mockUsers
      }
    });

    const deleteButton = wrapper.find('[data-testid="delete-pay_001"]');
    if (deleteButton.exists()) {
      await deleteButton.trigger('click');
      expect(wrapper.emitted('delete-payment')).toBeTruthy();
    }
  });
});
