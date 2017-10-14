export const dateToStrJpn = (date) => {
  let format = 'YYYY年MM月DD日 hh時mm分ss秒'
  format = format.replace(/YYYY/g, date.getFullYear())
  format = format.replace(/MM/g, date.getMonth() + 1)
  format = format.replace(/DD/g, date.getDate())
  format = format.replace(/hh/g, date.getHours())
  format = format.replace(/mm/g, date.getMinutes())
  format = format.replace(/ss/g, date.getSeconds())
  return format
}

export const isoToStrJpn = (iso) => dateToStrJpn(new Date(iso))
