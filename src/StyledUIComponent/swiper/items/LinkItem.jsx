

const LinkItem = ({ link, img, alt }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-[200px] max-h-[100px] p-4 bg-white rounded-md flex justify-center items-center"
        >
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={import.meta.env.VITE_BASE_URL + img}
                    alt={alt}
                    className="w-auto h-auto max-w-[200px] max-h-full object-contain"
                />
            </div>
        </a>
    )
}

export default LinkItem