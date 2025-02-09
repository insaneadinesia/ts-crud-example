interface CreateUpdateUserDTO {
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

export { CreateUpdateUserDTO, UserResponseDTO };
