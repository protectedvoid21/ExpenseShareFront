export interface GroupResponse {
  id: number;
  name: string;
  description: string;
  members: GroupMember[]; 
}

export interface GroupMember {
  userId: string;
  name: string;
  role: string;
}