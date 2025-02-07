/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function a() {
        return 'Hello World';
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */