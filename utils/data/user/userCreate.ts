"server only";

import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { userCreateProps } from "@/utils/types";

const prisma = new PrismaClient();

export async function userCreate({
	email,
	first_name,
	last_name,
	profile_image_url,
	user_id,
}: userCreateProps) {
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