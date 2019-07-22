import AxiosWrapper from "../utils/axios";
import { CIVILIZATION } from "../utils/constants";

class CivilizationsService {
  private axios: AxiosWrapper;

  constructor() {
    this.axios = new AxiosWrapper();
  }

  getCivilizations() {
    return this.axios.get<Promise<Civilization[]>>(CIVILIZATION.GET_CIVILIZATIONS);
  }
}

const instance = new CivilizationsService();
Object.freeze(instance);
export default instance;

export interface Civilization {
  id: number;
  name: string;
  expansion: string;
  army_type: string;
  unique_unit: string;
  unique_tech: string;
  team_bonus: string;
  civilization_bonus: string[];
}
