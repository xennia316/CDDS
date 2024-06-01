export const removeItem = (id, data, setData) => {
	const updatedData = data.filter((item) => item.id !== id);
	setData(updatedData);
};
