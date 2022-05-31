import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import skillsData from '../skillsData';

import SkillBar from './SkillBar';

import AOS from "aos";
import 'aos/dist/aos.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
       
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "110%",
        
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        //backgroundColor: bisque,
        
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        
    },
}));

const ProgramminSkills = () => {
   // const skillsData = skillsData;
   AOS.init();
    return (

        <TableContainer component={Paper} data-aos="fade-down" data-aos-delay="50"  data-aos-duration="1500">
            <Table>
                
                <TableBody >
                    {skillsData.map((skill) => (
                        <StyledTableRow data-aos="zoom-in" data-aos-delay="0"  data-aos-duration="1000">

                            <StyledTableCell className='s-icon'> <img src={skill.icon} alt={skill.alt} />  </StyledTableCell>
                            <StyledTableCell className='s-name'> {skill.name} </StyledTableCell>
                            <StyledTableCell className='s-level'> <SkillBar level={ skill.level+"%"} /> </StyledTableCell>
                           
                        </StyledTableRow>
                        
                    ))} 
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProgramminSkills;
