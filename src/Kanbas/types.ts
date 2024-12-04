export interface User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string | Date;
    role: string;
    loginId: string;
    section: string;
    lastActivity: string | Date;
    totalActivity: string;
}

export interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department: string;
    image: string;
    credits: Number;
    description: string;
}
  
  