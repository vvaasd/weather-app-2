export class DateFormatter {
  static formatDate(date){
    return new Intl.DateTimeFormat('ru-Ru', {
      weekday: "short",
      month: 'short',
      day: 'numeric',

    })
      .format(new Date(date))
  }

  static getTime(date) {
    return new Intl.DateTimeFormat('ru-Ru', {
      hour: '2-digit',
      minute: '2-digit',
    })
      .format(new Date(date))
      .replace('.', '')
  }
}
