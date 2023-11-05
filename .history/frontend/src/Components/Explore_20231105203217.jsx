import React from 'react';
import styles from "../style_modules/Explore.module.css";
import "../index.css"
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Explore = () => {
    const theme = useSelector((store) => store.authReducer.theme);

    return (
        <div style={{ width: "100%", paddingBottom: "2rem", background: theme === "dark" ? "#15191E" : "#edf2f7" }}>
            <div style={{ color: `${theme}` === "dark" ? "white" : "black", display: 'flex', justifyContent: "center", fontSize: "3rem", marginBottom: "1.5rem" }}>EXPLORE</div>
            <div className={styles.container}>
                <div className={`${styles.card} ${styles.one}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/966ab91b-78fc-4a18-bb98-395ffd1d0cff/dgebwk6-035deb75-16e2-4bf1-a0fb-7c090953c93d.png/v1/fill/w_622,h_350,q_70,strp/dream_house_by_deeplearningdiaries_dgebwk6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2NmFiOTFiLTc4ZmMtNGExOC1iYjk4LTM5NWZmZDFkMGNmZlwvZGdlYndrNi0wMzVkZWI3NS0xNmUyLTRiZjEtYTBmYi03YzA5MDk1M2M5M2QucG5nIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC85NjZhYjkxYi03OGZjLTRhMTgtYmI5OC0zOTVmZmQxZDBjZmZcL2RlZXBsZWFybmluZ2RpYXJpZXMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.1tNQMBK1PvYDeXgQvi87jQ0K3dr6oCNfpwx7ailFDGQ" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>AI Art</HEADING>
                    </TITLE>
                </div>

                <div className={`${styles.card} ${styles.two}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8ae37b1-4803-4666-9f86-6a71c3e49671/dgcxwu3-111394c8-85ff-480d-8058-79282431a250.png/v1/fill/w_618,h_350,q_70,strp/girl_in_japanese_buddhist_temple___4k_by_iasor73_dgcxwu3-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4YWUzN2IxLTQ4MDMtNDY2Ni05Zjg2LTZhNzFjM2U0OTY3MVwvZGdjeHd1My0xMTEzOTRjOC04NWZmLTQ4MGQtODA1OC03OTI4MjQzMWEyNTAucG5nIiwiaGVpZ2h0IjoiPD0xMDg4Iiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvZDhhZTM3YjEtNDgwMy00NjY2LTlmODYtNmE3MWMzZTQ5NjcxXC9pYXNvcjczLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.Wu7bonx8o41bGyKsBlLJJ-DGvVDEVLn-zIB7frR_sCU" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Digital Art</HEADING>
                    </TITLE>
                </div>
                <div className={`${styles.card} ${styles.three}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff39023a-dc5a-4b3f-a1d6-c5e49400c378/dgddmlf-bf0e10bd-684d-47b0-81ee-3e010e9745cb.jpg/v1/fill/w_444,h_250,q_70,strp/pink_train_by_comiconly_dgddmlf-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvZmYzOTAyM2EtZGM1YS00YjNmLWExZDYtYzVlNDk0MDBjMzc4XC9kZ2RkbWxmLWJmMGUxMGJkLTY4NGQtNDdiMC04MWVlLTNlMDEwZTk3NDVjYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.V-835_7A-hfFCG8JDfUUpO9ONBqcPMOui7g-1oijRfQ" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Fan Art</HEADING>
                    </TITLE>
                </div>
                <div className={`${styles.card} ${styles.four}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d74e1c1-12af-48f2-9475-22cd857f223d/dgdgrzi-71d72c02-d61f-48af-baba-4f6470b10b83.jpg/v1/fit/w_375,h_293,q_70,strp/rizvaniye_mosque_rw1023_by_inayatshah_dgdgrzi-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM3IiwicGF0aCI6IlwvZlwvNGQ3NGUxYzEtMTJhZi00OGYyLTk0NzUtMjJjZDg1N2YyMjNkXC9kZ2RncnppLTcxZDcyYzAyLWQ2MWYtNDhhZi1iYWJhLTRmNjQ3MGIxMGI4My5qcGciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zTCC12m76P9v0PVLJ-GgeTPR9tI9BU-R1zu4jYy4l44" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Photography Art</HEADING>
                    </TITLE>

                </div>
                <div className={`${styles.card} ${styles.five}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f802150-66ea-43cc-8f5b-a0ceb24350ea/dgcoo56-ac0a9afc-ea7d-4efc-a5e0-7163c91b7444.png/v1/fill/w_625,h_350,q_70,strp/spider_man_by_elffyie_dgcoo56-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI2NCIsInBhdGgiOiJcL2ZcLzFmODAyMTUwLTY2ZWEtNDNjYy04ZjViLWEwY2ViMjQzNTBlYVwvZGdjb281Ni1hYzBhOWFmYy1lYTdkLTRlZmMtYTVlMC03MTYzYzkxYjc0NDQucG5nIiwid2lkdGgiOiI8PTU4MjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VP1S9UGz_ndy4B3-Xc2lxt98JpnB4TrRMmzvxHPba2Y" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Fantasy Art</HEADING>
                    </TITLE>
                </div>

                <div className={`${styles.card} ${styles.six}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1c2aa3c-c2af-4ef6-b98f-097c9b984d9e/dfrdfsk-e9f42081-9000-4a87-b082-63a8fd693d06.jpg/v1/fit/w_414,h_277,q_70,strp/castlevania___lenore___cosplay_by_ksanastankevich_dfrdfsk-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg0IiwicGF0aCI6IlwvZlwvZDFjMmFhM2MtYzJhZi00ZWY2LWI5OGYtMDk3YzliOTg0ZDllXC9kZnJkZnNrLWU5ZjQyMDgxLTkwMDAtNGE4Ny1iMDgyLTYzYThmZDY5M2QwNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CiKreZ1rjqq34fuBg3HczuIu4REIRY1N8QJiM_A6fHQ" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Artisan Art</HEADING>
                    </TITLE>
                </div>
                <div className={`${styles.card} ${styles.seven}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae8620e9-ca02-45f5-826d-4b77f48bf2b5/dgeaybi-3d1e959b-82c3-4252-91d5-cdc27c2851c0.png/v1/fit/w_414,h_276,q_70,strp/mis_t_ery_mansion_by_unkopierbar_dgeaybi-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvYWU4NjIwZTktY2EwMi00NWY1LTgyNmQtNGI3N2Y0OGJmMmI1XC9kZ2VheWJpLTNkMWU5NTliLTgyYzMtNDI1Mi05MWQ1LWNkYzI3YzI4NTFjMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2bIVX3qoBEKhePpxi64T236fK29IW6hD6o-LH9Nxfps" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Anthro Art</HEADING>
                    </TITLE>
                </div>
                <div className={`${styles.card} ${styles.eight}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30778f11-b294-469b-a24b-e997b21f5cff/dgbc9vz-f58a9d5c-4547-4221-afe7-26d871e73507.jpg/v1/fill/w_375,h_250,q_70,strp/autumn_by_olgaboyko_dgbc9vz-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg0IiwicGF0aCI6IlwvZlwvMzA3NzhmMTEtYjI5NC00NjliLWEyNGItZTk5N2IyMWY1Y2ZmXC9kZ2JjOXZ6LWY1OGE5ZDVjLTQ1NDctNDIyMS1hZmU3LTI2ZDg3MWU3MzUwNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jEFzmkjDA9m6bWE_E1Ma0LcgCLLMHwVUuaykKmHJv8c" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Sculpture Art</HEADING>
                    </TITLE>
                </div>
                <div className={`${styles.card} ${styles.nine}`}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6e9107f-6fb8-4981-9624-9d475311e504/dge6vc3-92f455a1-3a3f-487b-8be4-17b8a2f8410d.jpg/v1/fit/w_375,h_300,q_70,strp/long_tailed_duck__clangula_hyemalis__by_veronrishka_dge6vc3-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2U2ZTkxMDdmLTZmYjgtNDk4MS05NjI0LTlkNDc1MzExZTUwNFwvZGdlNnZjMy05MmY0NTVhMS0zYTNmLTQ4N2ItOGJlNC0xN2I4YTJmODQxMGQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZAcPutzja8OQW48oQhJWWLgdBo7vQJbx1r3vNyChxK8" className={styles.explore_img} alt="explore pic" />
                    <TITLE>
                        <HEADING>Traditional Art</HEADING>
                    </TITLE>
                </div>
            </div>
        </div>
    )
}

const HEADING = styled.h4`
@media screen and (max-width: 750px){
    font-size: 1rem;
}

@media screen and (max-width: 580px){
    font-size: 0.7rem;
}

`;

const TITLE = styled.div`
    height: 50px;
    padding: 6px;
    box-sizing: border-box;
    position: absolute;
    color: white;
    bottom: 20px;

    @media screen and (max-width: 750px){
        bottom: 5px;
    }

    @media screen and (max-width: 580px){
        bottom: 0;
    }
`;
