import axios from "axios";
import { User } from "../../types";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
export const PEOPLE_API = `${REMOTE_SERVER}/api/people`;

// Retrieve
export const getAllPeople = async (): Promise<User[]> => {
  try {
    const { data } = await axiosWithCredentials.get<User[]>(PEOPLE_API);
    return data;
  } catch (error) {
    console.error("Error fetching people:", error);
    throw error;
  }
};

// Create
export const createPerson = async (person: Omit<User, "id">): Promise<User> => {
  try {
    const { data } = await axiosWithCredentials.post<User>(PEOPLE_API, person);
    return data;
  } catch (error) {
    console.error("Error creating person:", error);
    throw error;
  }
};

// Update
export const updatePerson = async (id: string, updates: Partial<User>): Promise<User> => {
  try {
    const { data } = await axiosWithCredentials.put<User>(`${PEOPLE_API}/${id}`, updates);
    return data;
  } catch (error) {
    console.error("Error updating person:", error);
    throw error;
  }
};

// Delete
export const deletePerson = async (id: string): Promise<void> => {
  try {
    await axiosWithCredentials.delete(`${PEOPLE_API}/${id}`);
  } catch (error) {
    console.error("Error deleting person:", error);
    throw error;
  }
};
