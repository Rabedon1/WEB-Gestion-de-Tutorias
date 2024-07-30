import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "ID del Registrador" },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Edad",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Número de Teléfono",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Correo Electrónico",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Dirección",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Ciudad",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Código Postal",
      flex: 1,
    },
  ];

  const mockDataContacts = [
    {
      id: 1,
      registrarId: "E01",
      name: "Juan Pérez",
      age: 34,
      phone: "0987654321",
      email: "juan.perez@gmail.com",
      address: "Av. Amazonas y Naciones Unidas",
      city: "Quito",
      zipCode: "170102",
    },
    {
      id: 2,
      registrarId: "E02",
      name: "María López",
      age: 28,
      phone: "0976543210",
      email: "maria.lopez@hotmail.com",
      address: "Calle Guayas y Olmedo",
      city: "Guayaquil",
      zipCode: "090112",
    },
    {
      id: 3,
      registrarId: "E03",
      name: "Carlos Andrade",
      age: 42,
      phone: "0965432109",
      email: "carlos.andrade@yahoo.com",
      address: "Calle 9 de Octubre y Malecón",
      city: "Guayaquil",
      zipCode: "090311",
    },
    {
      id: 4,
      registrarId: "E04",
      name: "Ana Gómez",
      age: 30,
      phone: "0954321098",
      email: "ana.gomez@gmail.com",
      address: "Av. República y Naciones Unidas",
      city: "Quito",
      zipCode: "170502",
    },
    {
      id: 5,
      registrarId: "E05",
      name: "Luis Martínez",
      age: 36,
      phone: "0943210987",
      email: "luis.martinez@outlook.com",
      address: "Calle Cuenca y Bolívar",
      city: "Cuenca",
      zipCode: "010202",
    },
    {
      id: 6,
      registrarId: "E06",
      name: "Gabriela Salazar",
      age: 25,
      phone: "0932109876",
      email: "gabriela.salazar@hotmail.com",
      address: "Av. 10 de Agosto y Colón",
      city: "Quito",
      zipCode: "170403",
    },
    {
      id: 7,
      registrarId: "E07",
      name: "Diego Fernández",
      age: 40,
      phone: "0921098765",
      email: "diego.fernandez@gmail.com",
      address: "Av. Machala y Rocafuerte",
      city: "Guayaquil",
      zipCode: "090414",
    },
    {
      id: 8,
      registrarId: "E08",
      name: "Patricia Castro",
      age: 29,
      phone: "0910987654",
      email: "patricia.castro@outlook.com",
      address: "Calle Loja y Manabí",
      city: "Cuenca",
      zipCode: "010303",
    },
    {
      id: 9,
      registrarId: "E09",
      name: "José Ruiz",
      age: 38,
      phone: "0909876543",
      email: "jose.ruiz@yahoo.com",
      address: "Av. 6 de Diciembre y Patria",
      city: "Quito",
      zipCode: "170204",
    },
    {
      id: 10,
      registrarId: "E10",
      name: "Lucía Romero",
      age: 33,
      phone: "0998765432",
      email: "lucia.romero@gmail.com",
      address: "Calle Portete y Quito",
      city: "Guayaquil",
      zipCode: "090515",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTOS"
        subtitle="Lista de Contactos"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
