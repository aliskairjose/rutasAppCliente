export interface Comment {
  comment?: string;
  created_at?: string;
  id?: number;
  status?: number;
  type_comment_id?: number;
  updated_at?: string;
  user_id?: number;
  read?: number;
  responses?: CommentResponse[];
  type_comment?: CommentType;
}

export interface CommentType {
  created_at?: string;
  id?: number;
  name?: string;
  type?: string;
  updated_at?: string;
}

export interface CommentResponse {
  comment?: string;
  comment_id?: string;
  created_at?: string;
  id?: number;
  updated_at?: string;
  user_id?: number;
}