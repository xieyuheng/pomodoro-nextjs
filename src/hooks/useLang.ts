import {Lang} from "../models/Lang"

const theLang = new Lang()

export function useLang(): Lang {
  return theLang
}
