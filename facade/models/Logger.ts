export default class Logger {
  success(message: string) {
    console.log(`Success: ${message}`);
  }
  error(message: string) {
    console.log(`Error: ${message}`);
  }
}
