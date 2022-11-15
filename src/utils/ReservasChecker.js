import { DateTime } from 'luxon'

const checkIfReservaCouldBePossible = ({ selectedDate, reservaMesa }) => {
  const reservaDate = DateTime.fromISO(reservaMesa.date_reserva).plus({ hours: 3 })
  const reservaRequested = DateTime.fromISO(selectedDate.toISOString())
  const isSameDay = reservaDate.hasSame(reservaRequested, 'day')
  const isEarlyAvailable = reservaRequested.startOf('minutes') < reservaDate.minus({ minutes: 119 }).startOf('minutes')
  const isLaterAvailable = reservaRequested.startOf('minutes') > reservaDate.plus({ minutes: 119 }).startOf('minutes')

  let canMakeReservation = true
  if(!isSameDay){
    return canMakeReservation
  }

  if (isEarlyAvailable || isLaterAvailable) {
    canMakeReservation = true
  }else{
    canMakeReservation = false
  }
  return canMakeReservation
}

export const getAvailableMesasForThatDate = ({ selectedDate, mesas }) => {
  const availableMesas = mesas.filter(mesa => {
    if(!mesa.reservas_mesa.length){
      return true
    }
    const mesaTieneCupo = mesa.reservas_mesa.some(reserva => checkIfReservaCouldBePossible({ selectedDate, reservaMesa: reserva }))
    return mesaTieneCupo
  })
  return availableMesas
}
