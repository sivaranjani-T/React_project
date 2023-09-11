import { render, screen } from '@testing-library/react';

import FooterComponent from './components/FooterComponent';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';




// test('FooterComponent work sucessfully', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Example 1 renders successfully", () => {
//   render(<FooterComponent/>);

//   const element = screen.getByAltText(/FooterComponent/i);

//   expect(element).toBeInTheDocument();
// })
test("Footer component render sucessfully", () => {
  render(<FooterComponent />);

  const element = screen.getByText(/employee/i);

  expect(element).toBeInTheDocument();
});
describe('HeaderComponent', () => {
  it('renders the header with the correct title and link', () => {
    render(<HeaderComponent />);

    // Assert that the "CRUD OPERATIONS" text is present
    const titleElement = screen.getByText('CRUD OPERATIONS');
    expect(titleElement).toBeInTheDocument();

    // Assert that the link points to "https://google.com"
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'http// google.com');
  });
});




// test("List renders successfully", () => {
//   render(<ListEmployeeComponent data={mockData} />)
//   expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
// })
// const mockData = [
//   {
//       "id": 1,
//       "firstName": "Fletcher",
//       "lastName": "McVanamy",
//       "emailId": "mmcvanamy0@e-recht24.de",
//       "mobileNumber": "30",
//       "date":"23/08/23",
//       "address":"aaaa"

//     }, 
      
// ]
// describe('ListEmployeeComponent', () => {
//   let mockAxios;

//   beforeEach(() => {
//     mockAxios = new MockAdapter(axios);
//   });

//   afterEach(() => {
//     mockAxios.restore();
//   });

//   it('should render a list of employees', async () => {
//     const mockData = [
//       {
//         id: 1,
//         firstName: 'Siva',
//         lastName: 'Ranjani',
//         emailId: 'abccompany@gmail.com',
//         mobileNumber: '30',
//         date: '23/08/23',
//         address: 'aaaa',
//       },
//     ];

//     // Mock the Axios GET request to return mockData
//     mockAxios.onGet('/api/employees').reply(200, mockData);

//     render(<ListEmployeeComponent />);

//     // Wait for the Axios request to complete
//     await waitFor(() => {
//       expect(screen.getByText(/siva/i)).toBeInTheDocument();
//     });

//     // Check if the rendered data matches the mocked data
//     expect(screen.getByText(/siva/i)).toBeInTheDocument();
//     expect(screen.getByText(/ranjani/i)).toBeInTheDocument();
//     expect(screen.getByText(/abccompany@gmail.com/i)).toBeInTheDocument();
//   });

//   // Add more test cases as needed
// });
