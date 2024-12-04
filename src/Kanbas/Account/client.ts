import axios from 'axios';
import { User, Course } from '../types';

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = '';
export const USERS_API = `${REMOTE_SERVER}/api/users`;

// basic operations
export const signin = async (credentials: any): Promise<User> => {
  try {
    const response = await axiosWithCredentials.post<User>(
      `${USERS_API}/signin`,
      credentials
    );
    return response.data;
  } catch (error) {
    console.error('Signin error:', error);
    window.alert('Invalid username or password');
    // throw error;
    return null as any;
  }
};

export const signup = async (user: any): Promise<User> => {
  const response = await axiosWithCredentials.post<User>(
    `${USERS_API}/signup`,
    user
  );
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

// Account
export const updateUser = async (user: User): Promise<User> => {
  try {
    const response = await axiosWithCredentials.put<User>(
      `${USERS_API}/${user._id}`,
      user
    );
    return response.data;
  } catch (error) {
    console.error('Update user error:', error);
    throw error;
  }
};

export const profile = async (): Promise<User | null> => {
  const response = await axiosWithCredentials.post<User | null>(
    `${USERS_API}/profile`
  );
  return response.data;
};

// Course
export const findMyCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get<Course[]>(
    `${USERS_API}/current/courses`
  );
  return data;
};

export const createCourse = async (course: Course): Promise<Course> => {
  try {
    const { data } = await axiosWithCredentials.post<Course>(
      `${USERS_API}/current/courses`,
      course
    );
    return data;
  } catch (error) {
    console.error('Create course error:', error);
    throw error;
  }
};
