import React from "react";

const members: {
	name: string;
	role: string;
	motto: string;
}[] = [
	{
		name: "Rob Baban",
		role: "leader",
		motto: "",
	},
	{
		name: "Wendell Dador",
		role: "Front-end & Back-end",
		motto: "",
	},
	{
		name: "Love Faith Alcorin",
		role: "Front-end",
		motto: "",
	},
	{
		name: "Joshua Samenian",
		role: "Front-end",
		motto: "",
	},
	{
		name: "Onil Martinez",
		role: "Front-end",
		motto: "",
	},
];

const Members = () => {
	return (
		<div
			className={"flex items-center min-h-screen gap-20 justify-center w-full bg-zinc-700"}
      id=""
		>
			{members.map(({ name, role, motto }, index) => (
				<div key={index} className={"flex flex-col"}>
					<div>{name}</div>
					<div>{role}</div>
					<div>{motto}</div>
				</div>
			))}
		</div>
	);
};

export default Members;
