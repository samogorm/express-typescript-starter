import format from 'date-fns/format';

class Logger {
  static text(text: string, colour: string): void {
    const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const label = `[${process.env.APP_NAME}] . [${timestamp}] . ${text}`;

    console.log(colour, label);
  }
}

export default Logger;
