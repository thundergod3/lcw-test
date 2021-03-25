import moment from "moment";

const TheirMessage = ({ lastMessage, message }) => {
	const isFirstMessageByUser = !lastMessage || lastMessage.sender?.username !== message.sender?.username;

	return (
		<div className="message-row">
			{isFirstMessageByUser && (
				<div className="message-avatar" style={{ background: `url(${message?.sender?.avatar})` }} />
			)}
			{message?.attachments?.length > 0 ? (
				<img
					src={message.attachments[0].file}
					alt="message-attachment"
					className="message-image"
					style={{ marginLeft: isFirstMessageByUser ? 4 : 48 }}
				/>
			) : (
				<div
					className="message"
					style={{ float: "left", background: "#CABCDC", marginLeft: isFirstMessageByUser ? 4 : 48 }}>
					{message.text} -
					<span style={{ fontSize: 10, marginLeft: 4 }}>{moment(message.created).format("MM Do YYYY")}</span>
				</div>
			)}
		</div>
	);
};

export default TheirMessage;
