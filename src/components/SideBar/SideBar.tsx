import { uniqueId } from "lodash";
import { FC, useContext } from "react";
import { AppContext } from "../../App";
import { networks } from "../../constants";
import { HomeContext } from "../Home/Home";

const tabs = [
	{
		label: "Home",
		value: "home",
	},
	{
		label: "Chats",
		value: "chats",
	},
	{
		label: "Requests",
		value: "requests",
	},
	{
		label: "Spam",
		value: "spams",
	},
	
];

const Sidebar: FC = () => {
	const { selectedTab, setSelectedTab, setSelectedConversation } =
		useContext(HomeContext);
	const { userDetails, selectedNetworkId, setNetworkOption } =
		useContext(AppContext);
	return (
		<div className="h-100 d-flex flex-column">
			<div className="mb-2">
				<div className="d-flex justify-content-center">
					<div
						className="overflow-hidden d-flex justify-content-center align-items-center border"
						style={{
							width: "5em",
							height: "5em",
							borderRadius: "2.5em",
						}}
					>
						<img
							src={userDetails?.profilePicture}
							alt=""
							style={{ width: "100%", height: "100%" }}
							hidden={!userDetails}
						/>
						<i className="bi bi-person" hidden={!!userDetails}></i>
					</div>
				</div>
				<div className="d-flex justify-content-center p-2">
					<div className="text-cut text-white rounded-pill f-75 px-2">
						{userDetails?.name || "...."}
					</div>
				</div>
                <div className="d-flex justify-content-center mb-4">
					<div className="text-cut text-white w-1/2 rounded-pill f-75">
						{userDetails?.wallets || "...."}
					</div>
				</div>
			</div>
			<div>
				{tabs.map((tab) => (
					<div
						key={uniqueId()}
						className={`d-flex f-90  cursor-pointer ${
							selectedTab === tab.value ? "bg-[#19172b] rounded-r-full ml-2 mr-8  text-white" : ""
						}`}
						onClick={() => {
							setSelectedTab(tab.value);
							setSelectedConversation(undefined);
						}}
						style={{ height: "3.5em" }}
					>
						<div
							className={`left-bar ${
								selectedTab === tab.value ? "bg-white text-white" : ""
							}`}
						></div>
						<div className={`d-flex align-items-center px-2 ${
								selectedTab === tab.value ? " text-white" : ""
							}`}>
							<div className={`d-flex align-items-center px-2 ${
								selectedTab === tab.value ? " text-white" : ""
							}`}>{tab.label}</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-auto d-flex f-75 p-3 w-100 align-items-center">
				<div>
					Selected network:{" "}
					<span className="fw-645 ms-1">
						{selectedNetworkId
							? networks[selectedNetworkId].label
							: "None"}
					</span>
				</div>

				<button
					className="ms-2 rounded p-1 bg-thm border-0 shadow-sm text-white"
					onClick={() => {
						setNetworkOption(true);
					}}
				>
					Switch
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
