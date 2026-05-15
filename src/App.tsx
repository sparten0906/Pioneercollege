import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { NoticeProvider }  from './context/NoticeContext'
import { ThemeProvider }   from './context/ThemeContext'
import SiteLayout          from './components/layout-shell/SiteLayout'
import HomePage            from './pages/HomePage'
import AboutPage           from './pages/AboutPage'
import CoursesPage         from './pages/CoursesPage'
import CourseDetailPage    from './pages/CourseDetailPage'
import AdmissionsPage      from './pages/AdmissionsPage'
import FacultyPage         from './pages/FacultyPage'
import GalleryPage         from './pages/GalleryPage'
import ContactPage         from './pages/ContactPage'
import NotificationsPage   from './pages/NotificationsPage'
import ResultsPage         from './pages/ResultsPage'
import AlumniPage          from './pages/AlumniPage'
import NotFoundPage        from './pages/NotFoundPage'
import { ROUTES }          from './constants/route-paths.constants'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <NoticeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SiteLayout />}>
                <Route index                          element={<HomePage />} />
                <Route path={ROUTES.ABOUT}            element={<AboutPage />} />
                <Route path={ROUTES.COURSES}          element={<CoursesPage />} />
                <Route path={ROUTES.COURSE_DETAIL}    element={<CourseDetailPage />} />
                <Route path={ROUTES.ADMISSIONS}       element={<AdmissionsPage />} />
                <Route path={ROUTES.FACULTY}          element={<FacultyPage />} />
                <Route path={ROUTES.GALLERY}          element={<GalleryPage />} />
                <Route path={ROUTES.CONTACT}          element={<ContactPage />} />
                <Route path={ROUTES.NOTIFICATIONS}    element={<NotificationsPage />} />
                <Route path={ROUTES.RESULTS}          element={<ResultsPage />} />
                <Route path={ROUTES.ALUMNI}           element={<AlumniPage />} />
                <Route path="*"                       element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </NoticeProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App