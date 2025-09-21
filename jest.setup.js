// Jest setup file
import { config } from '@vue/test-utils';

// Global test configuration
config.global.mocks = {
  // Add global mocks here if needed
};

// Mock console methods to keep test output clean
global.console = {
  ...console,
  // Suppress console.log during tests
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};
