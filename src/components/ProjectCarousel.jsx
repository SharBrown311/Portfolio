import { Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ProjectCarousel = () => (

  <Carousel autoPlay showArrows = {false}>
  <div>
      <img alt="" src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg" className='project_image'/>
      <p className="legend">Study Buddy</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://jooinn.com/images/nature-319.jpg" className='project_image'/>
      <p className="legend">Digital Name Badge</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://www.stock-free.org/images/stock-free-test-photo-07092015-16.jpg" className='project_image'/>
      <p className="legend">Project 3</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://3.bp.blogspot.com/-AhBahdEd3Yg/VodhRsBc3RI/AAAAAAAAGtM/roFwvTANhmA/s1600/Red%2Bflowers%2Bgreen%2Blandscape%2Bdesktop%2Bwallpaper.jpg" className='project_image' />
      <p className="legend">Project 4</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://3.bp.blogspot.com/-AhBahdEd3Yg/VodhRsBc3RI/AAAAAAAAGtM/roFwvTANhmA/s1600/Red%2Bflowers%2Bgreen%2Blandscape%2Bdesktop%2Bwallpaper.jpg" className='project_image'/>
      <p className="legend">Project 5</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://jooinn.com/images/nature-319.jpg" className='project_image'/>
      <p className="legend">Project 6</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://3.bp.blogspot.com/-AhBahdEd3Yg/VodhRsBc3RI/AAAAAAAAGtM/roFwvTANhmA/s1600/Red%2Bflowers%2Bgreen%2Blandscape%2Bdesktop%2Bwallpaper.jpg" className='project_image'/>
      <p className="legend">Project 7</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg" className='project_image'/>
      <p className="legend">Legend 8</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://www.stock-free.org/images/stock-free-test-photo-07092015-16.jpg" className='project_image' />
      <p className="legend">Legend 9</p>
      <p>A brief description of this project.</p>
  </div>
  <div>
      <img alt="" src="https://jooinn.com/images/nature-319.jpg" className='project_image' />
      <p className="legend">Legend 10</p>
      <p>A brief description of this project.</p>
  </div>
</Carousel>

);

export default ProjectCarousel;
