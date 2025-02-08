interface CreateUserDTO {
  name: string;
  email: string;
}

interface UserResponseDTO {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { CreateUserDTO, UserResponseDTO };
