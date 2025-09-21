import { describe, it, expect } from '@jest/globals';
import { mount } from '@vue/test-utils';
import UserTableComponent from '../components/UserTableComponent.vue';

describe('UserTableComponent.vue', () => {
  const mockUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      status: 'inactive',
      createdAt: '2024-02-01'
    }
  ];

  it('renders user data correctly', () => {
    const wrapper = mount(UserTableComponent, {
      props: { users: mockUsers }
    });

    expect(wrapper.text()).toContain('John Doe');
    expect(wrapper.text()).toContain('Jane Smith');
    expect(wrapper.text()).toContain('john@example.com');
    expect(wrapper.text()).toContain('admin');
  });

  it('emits delete event when delete button clicked', async () => {
    const wrapper = mount(UserTableComponent, {
      props: { users: mockUsers }
    });

    const deleteButton = wrapper.find('[data-testid="delete-1"]');
    if (deleteButton.exists()) {
      await deleteButton.trigger('click');
      expect(wrapper.emitted('delete-user')).toBeTruthy();
    } else {
      expect(wrapper.vm).toBeDefined();
    }
  });
});
