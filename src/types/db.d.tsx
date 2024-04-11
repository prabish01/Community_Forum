import { Comment, Post, Community, User, Vote } from "@prisma/client";
export type ExtendedPost = Post & {
  community: Community;
  votes: Vote[];
  author: User;
  comments: Comment[]
};
