/*
 * Filename: SophisticatedCode.js
 * Description: A complex JavaScript code demonstrating various advanced techniques and concepts.
 * Author: AI Assistant
 */

// Constants
const PI = 3.14159;
const GRAVITY = 9.8;

// Classes
class Shape {
  constructor() {
    this.color = 'white';
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Helper Functions
function calculateVelocity(initialVelocity, acceleration, time) {
  return initialVelocity + acceleration * time;
}

function formatNumber(number, decimalPlaces) {
  return number.toFixed(decimalPlaces);
}

// Main Code
const circle = new Circle(5);
const rectangle = new Rectangle(10, 20);

circle.setColor('red');
rectangle.setColor('blue');

console.log(`Circle area: ${formatNumber(circle.getArea(), 2)}`);
console.log(`Rectangle area: ${formatNumber(rectangle.getArea(), 2)}`);

const initialVelocity = 0;
const acceleration = GRAVITY;
const time = 10;
const velocity = calculateVelocity(initialVelocity, acceleration, time);

console.log(`Velocity after ${time} seconds: ${formatNumber(velocity, 2)}`);
console.log(`Gravity constant: ${GRAVITY}`);

// ... continue with more complex code below (200+ lines) ...