export interface SeasonConfig {
  d: number;
  startingElo: 1200;
  k: 32;
}

export interface Season {
  createdAt: string;
  endDate: null | string;
  startDate: null | string;
  config: SeasonConfig;
  name: string;
  pk1: string;
  type: string;
}

export type GameSeason = Omit<Season, "type" | "createdAt" | "config">;

export interface GameResultPlayer {
  id: string;
  name: string;
}

export interface GameResult {
  eloAfterGame: number;
  eloBeforeGame: number;
  placement: number;
  player: GameResultPlayer;
}

export interface Game {
  season: GameSeason;
  createdAt: string;
  pk1: string;
  type: string;
  results: GameResult[];
}

export interface SeasonPlayer {
  createdAt: string;
  elo: number;
  gamesPlayed: number;
  name: string;
  pk1: string;
  type: string;
}

export interface FormGameResultPlayer {
  playerName: string;
  playerId: null | string;
}

export interface FormGameResult extends FormGameResultPlayer {
  placement: number;
}

export interface CreateGameDTO {
  seasonId: string;
  results: FormGameResult[];
}

export interface CreateGameResponse {
  id: string;
}
