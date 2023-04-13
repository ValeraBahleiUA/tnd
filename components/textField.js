export default function TextField (params) {
    return(<textarea readOnly value={params.text}  className="block sm:w-2/3 xl:w-1/2 w-10/12 h-80 mx-auto rounded-md border-2 border-gray-600 p-3"></textarea>);
};
