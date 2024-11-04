"server only";

import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { userCreateProps } from "@/utils/types";

const prisma = new PrismaClient();

interface UserCreateParams {
    email: string;
    first_name?: string;
    last_name?: string;
    profile_image_url?: string;
    user_id: string;
}

export async function userCreate({
	email,
	first_name,
	last_name,
	profile_image_url,
	user_id,
}: UserCreateParams) {
	return await prisma.user.create({
		data: {
			email,
			first_name,
			last_name,
			profile_image_url,
			user_id,
		},
	});
}