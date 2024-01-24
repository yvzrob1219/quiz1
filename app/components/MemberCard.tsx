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
				"flex flex-col min-h-60 dark:bg-neutral-800 items-center align-middle min-w-40 text-center"
			}
		>
			<div>{image}</div>
			<div>{name}</div>
			<div>{role}</div>
			<div>{motto}</div>
			<div className={"flex gap-2 self-align-bottom"}>
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
