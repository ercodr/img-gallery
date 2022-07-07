import { AiTwotoneLike } from 'react-icons/ai'
import { RiDownloadCloud2Fill } from 'react-icons/ri'
import { GrView } from 'react-icons/gr'

const ImageCard = ({ image }) => {
  return (
    <li key={image.id} className="bg-white overflow-hidden rounded-lg">
      <div className="w-sm h-[15rem] bg-slate-900 overflow-hidden [&>*]:hover:flex [&>img]:hover:scale-[1.2] [&>img]:hover:opacity-50 relative [&>*]:transition-all [&>*]:duration-1000 [&>button]:translate-y-full [&>button]:hover:translate-y-0">
        <img
          src={image.webformatURL}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
        <button className="flex absolute font-black inset-0 justify-center items-center  text-slate-100 cursor-default">
          <span
            onClick={() => {
              window.open(image.largeImageURL, '_blank')
            }}
            className="bg-blue-600 px-4 py-1 rounded cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-slate-100 transition-all duration-500"
          >
            Expand
          </span>
        </button>
        <div className="absolute top-2 right-2 w-[60px] h-[60px] border-2 overflow-hidden rounded-full">
          <img
            src={image.userImageURL}
            alt=""
            className="w-[60px] h-[60px] object-cover"
          />
        </div>
      </div>
      <div className="">
        <div className="px-4 pt-2 font-bold text-blue-500">
          Photo by {image.user}
        </div>
        <div className="flex px-4 w-full p-2 text-sm text-slate-900 flex-wrap gap-x-4 flex-shrink-0 [&>*]:mr-3 [&>div]:flex [&>div]:items-center [&>div]:gap-x-2">
          <div>
            <GrView /> <span className="font-bold">{image.views}</span>
          </div>
          <div>
            <RiDownloadCloud2Fill />
            <span className="font-bold">{image.downloads}</span>
          </div>
          <div>
            <AiTwotoneLike /> <span className="font-bold">{image.likes}</span>
          </div>
        </div>
        <div className="[&>*]:bg-slate-200 [&>*]:rounded [&>*]:px-4 [&>*]:py-1 w-full gap-y-2 p-2 flex flex-wrap flex-shrink-0 [&>*]:mr-3 text-xs text-blue-500">
          {image.tags.split(',').map((tag, index) => {
            return (
              <div key={index} className="max-w-max">
                # {tag}
              </div>
            )
          })}
        </div>
      </div>
    </li>
  )
}

export default ImageCard
