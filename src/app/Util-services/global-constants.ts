import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConstants {

  constructor() { }

  public static readonly billMonths = ['Jun-2023', 'May-2023', 'Apr-2023', 'Mar-2023', 'Feb-2023', 'Jan-2023', 'Dec-2022', 'Nov-2022', 'Oct-2022', 'Sep-2022','Aug-2022','Jul-2022', 'Jun-2022', 'May-2022', 'Apr-2022','Mar-2022', 'Feb-2022', 'Jan-2022', 'Dec-2021', 'Nov-2021', 'Oct-2021', 'Sep-2021', 'Aug-2021', 'Jul-2021', 'Jun-2021', 'May-2021', 'Apr-2021', 'Mar-2021', 'Feb-2021', 'Jan-2021'];

}
