class Computer {
  constructor(brand, cpu, ram, hdd, gpu) {
    this.brand = brand;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.gpu = gpu;
    this.score = 0;
  }
  resetScore() {
    this.score = 0;
  }
}
class Laptop extends Computer {
  constructor(brand, cpu, ram, hdd, gpu, batteryCapacity, screenSize) {
    super(brand, cpu, ram, hdd, gpu);
    this.batteryCapacity = batteryCapacity;
    this.screenSize = screenSize;
  }
}
class Comparer {
  constructor() {
    this.computers = [];
  }
  addComputer(computer) {
    this.computers.push(computer);
  }
  findBestGamingComputer() {
    this.findBestRam();
    this.findBestGpu();
    this.computers.sort((a, b) => b.score - a.score);
    console.log(`Best Gaming Computer:${this.computers[0].brand}`);
  }
  findBestRam() {
    this.computers.sort((a, b) => b.ram - a.ram);
    this.computers[0].score++;
  }
  findBestGpu() {
    this.computers.sort((a, b) => b.gpu - a.gpu);
    this.computers[0].score++;
  }
}
const lenovo = new Computer("Lenovo", "I5", 32, 256, 4);
const asus = new Laptop("Asus", "I7", 64, 512, 8);
const comparer = new Comparer();
comparer.addComputer(lenovo);
comparer.addComputer(asus);
comparer.findBestGamingComputer();
