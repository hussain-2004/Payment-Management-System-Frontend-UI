import { mount } from '@vue/test-utils';
import PaymentTableComponent from '../PaymentTableComponent.vue';ort { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PaymentTableComponent from '../PaymentTableComponent.vue'

const mockPayments = [
  {
    id: 'pay_001',
    userId: 1,
    amount: 1250.0,
    currency: 'INR',
    status: 'completed',
    category: 'payment',
    description: 'Invoice payment',
    createdAt: '2024-03-01T16:00:00'
  },
  {
    id: 'pay_002',
    userId: 2,
    amount: 750.5,
    currency: 'INR',
    status: 'pending',
    category: 'refund',
    description: 'Refund request',
    createdAt: '2024-03-02T10:30:00'
  }
]

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]

describe('PaymentTableComponent', () => {
  it('should render payment data in table rows', () => {
    const wrapper = mount(PaymentTableComponent, {
      props: {
        payments: mockPayments,
        users: mockUsers
      }
    })

    // Test if payment IDs are displayed
    expect(wrapper.text()).toContain('pay_001')
    expect(wrapper.text()).toContain('pay_002')
    
    // Test if amounts are displayed with rupee symbol
    expect(wrapper.text()).toContain('₹1250')
    expect(wrapper.text()).toContain('₹750.5')
    
    // Test if user names are displayed
    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('Jane Smith')
    
    // Test if statuses are displayed
    expect(wrapper.text()).toContain('completed')
    expect(wrapper.text()).toContain('pending')
  })

  it('should handle user name lookup correctly', () => {
    const wrapper = mount(PaymentTableComponent, {
      props: {
        payments: mockPayments,
        users: mockUsers
      }
    })

    const component = wrapper.vm
    
    // Test getUserName method
    expect(component.getUserName(1)).toBe('John Doe')
    expect(component.getUserName(2)).toBe('Jane Smith')
    expect(component.getUserName(999)).toBe('Unknown') // Non-existent user
    
    // Test getUserInitials method
    expect(component.getUserInitials(1)).toBe('JD')
    expect(component.getUserInitials(2)).toBe('JS')
    expect(component.getUserInitials(999)).toBe('?') // Non-existent user
  })
})
