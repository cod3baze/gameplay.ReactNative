export type GuildDTO = {
  id: number;
  name: string;
  icon: null;
  owner: boolean;
};

export interface AppointmentDTO {
  id: number;
  guild: GuildDTO;
  category: number;
  date: string;
  description: string;
}
