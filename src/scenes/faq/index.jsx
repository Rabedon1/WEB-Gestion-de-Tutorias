import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Página de Preguntas Frecuentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Cómo puedo restablecer mi contraseña?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para restablecer tu contraseña, haz clic en "Olvidé mi contraseña" en la página de inicio de sesión. Luego, sigue las instrucciones que recibirás por correo electrónico.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Cómo puedo actualizar mi información personal?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Puedes actualizar tu información personal accediendo a tu cuenta y navegando a la sección "Perfil". Desde allí, puedes editar tu información y guardar los cambios.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Cómo contacto con el soporte técnico?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Puedes contactar con el soporte técnico a través de la sección "Contacto" en nuestro sitio web o enviando un correo electrónico a soporte@ejemplo.com. Nuestro equipo está disponible 24/7.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Cuáles son los métodos de pago aceptados?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito, PayPal y transferencias bancarias. También puedes consultar la sección "Pagos" para más detalles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Puedo cancelar mi suscripción en cualquier momento?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sí, puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. Sin embargo, ten en cuenta que no se reembolsará el período restante de la suscripción.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

