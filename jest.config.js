module.exports = {
    clearMocks: true,
    setupFilesAfterEnv: ['<rootDir>/jest.settings.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
            '<rootDir>/node_modules/jest-transform-stub'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    moduleDirectories: ['node_modules', 'src']
};
