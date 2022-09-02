import {
  CreateGameDTO,
  CreateGameResponse,
  Game,
  Season,
  SeasonPlayer,
} from "@/types";
import config from "@/config";

export enum API_CACHE_KEYS {
  SEASON = "season",
  GAME = "game",
  PLAYER = "player",
}

/**
 * Performs a GET request
 * @param endpoint
 */
const getRequest = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: "GET",
  });

  return response.json();
};

/**
 * Performs a POST request
 * @param endpoint Endpoint
 * @param payload  Object to be stringified into a response body
 */
const postRequest = async <T>(endpoint: string, payload: any): Promise<T> => {
  const response = await fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return response.json();
};

/**
 * Fetch a list of seasons
 */
export const fetchSeasons = async (): Promise<Season[]> =>
  getRequest<Season[]>("/season");

/**
 * Fetch a list of games in a given season
 * @param seasonId Season id
 */
export const fetchGames = async (
  seasonId: string | undefined
): Promise<Game[]> => {
  if (!seasonId) return [];

  return getRequest<Game[]>(`/game?seasonId=${seasonId}`);
};

/**
 * Fetch a list of games in a given season
 * @param seasonId Season id
 */
export const fetchPlayers = async (
  seasonId: string | undefined
): Promise<SeasonPlayer[]> => {
  if (!seasonId) return [];

  return getRequest<SeasonPlayer[]>(`/player?seasonId=${seasonId}`);
};

/**
 * Create a game
 * @param game Game DTO
 */
export const createGame = async (
  game: CreateGameDTO
): Promise<CreateGameResponse> =>
  postRequest<CreateGameResponse>(`/game`, game);
