import moment from "moment";

const MyMessage = ({ message }) => {
	if (message?.attachments?.length > 0)
		return (
			<img
				src={message.attachments[0].file}
				alt="message-attachment"
				className="message-image"
				style={{ float: "right" }}
			/>
		);

	return (
		<div className="message" style={{ float: "right", marginRight: 18, color: "#fff", background: "#3b2a50" }}>
			<span style={{ fontSize: 10, marginRight: 4 }}>{moment(message.created).format("MM Do YYYY")}</span> -{" "}
			{message.text}
		</div>
	);
};

export default MyMessage;
