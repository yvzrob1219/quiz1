import React from "react";
import MemberCard from "./MemberCard";

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
		role: "Pitcher",
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
			className={"flex flex-col items-center min-h-screen gap-10 w-full text-center"}
			id="Whatwedo"
		>
			<h2>Meet the Innoventors</h2>
			<p>We believe in the power of technology not just as a tool, but as an extension of human potential to make life better, easier, and more connected.</p>
			<div className={"flex items-center justify-center gap-20 px-5 w-full"}>
				{members.slice(0, -2).map(({ name, role, motto }) => (
					<MemberCard
						key={name}
						name={name}
						image="image"
						role={role}
						motto={motto}
					/>
				))}
			</div>
			<div className="flex items-center gap-20">
					{members.slice(-2).map(({ name, role, motto }) => (
						<MemberCard
							key={name}
							name={name}
							image="image"
							role={role}
							motto={motto}
						/>
					))}
				</div>
		</div>
	);
};

export default Members;
