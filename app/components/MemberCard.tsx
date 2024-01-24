import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MemberCard = ({
	name,
	image,
	role,
	motto,
} : {
	name: string;
	image: string;
	role: string;
	motto: string;
}) => {
	return (
		<div
			className={
				"flex flex-col min-h-60 bg-neutral-300 dark:bg-neutral-800 justify-center justify-items-stretch min-w-40 gap-1 "
			}
		>
			<div>{image}</div>
			<div>{name}</div>
			<div>{role}</div>
			<div>{motto}</div>
			<div className={"flex justify-center items-end "}>
				<button>
					<FaTwitter />
				</button>
				<button>
					<FaLinkedin />
				</button>
			</div>
		</div>
	);
};

export default MemberCard;
