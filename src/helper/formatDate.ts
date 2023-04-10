import moment from 'moment'

export const formatDate = (date: Date) => {
  const time = moment(date)
  const formattedDate = time.format('MMM D, YYYY h:mm A')

  return formattedDate
}
