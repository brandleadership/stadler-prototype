/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    experimental: {
        serverComponentsExternalPackages: [
            '@react-email/components',
            '@react-email/render',
            '@react-email/tailwind',
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/getFeeding', // get everything after /api/
                destination: `https://www.juicer.io/api/feeds/stadler_rail/iframe`, // send it to your API
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/static/:img*',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/static/filer/:path*',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/static/:cms*',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/maps/:path*',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/js/:path*',
                destination: '/en/',
                permanent: true,
            },
            {
                source: '/media/img/:path*',
                destination: '/en/',
                permanent: true,
            },
            {
                source: '/signalling/:path*',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/service/:path*',
                destination: '/en/solutions/service',
                permanent: true,
            },

            // Specific media files redirects
            {
                source: '/media/pdf/f3nsreiz0715p.pdf',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/f3l0513pl_print.pdf',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/kiss_ae0513_ru.pdf',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/datenblatt%20flirt%20akku_testträger.pdf',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_bb_datenblätter_ubahn_jk_rz.pdf',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/fsta0416i.pdf',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/fsta0416i.pdf',
                destination: '/en/solutions/f3vd0716i.pdf',
                permanent: true,
            },
            {
                source: '/en/references/download/',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/electriclowfloorflirtestonia_ru.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/aeb_stama_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/aeb_stama_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/ergaenzende-einkaufsbedingungen_eu-zulassungsprozesse_star.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_deutschland_lieferadresse.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/Stadler-Winterthur-AG-Lageplan.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/supplier%20guideline_invoices%20for%20accounting%20purposes_stadler%20deutschland%20gmbh_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/lieferantenrichtlinie_rechnungen%20für%20die%20rechnungslegung_stadler%20rail%20service%20deutschland%20gmbh_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_deutschland_lieferadresse_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/aeb_stag_star_stawi_sigch_srsch_2023_vereinbarung_r-06d_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/ts-0182-00_delivery_specification_for_welded-and-machined_components_all.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/ls_en_032024_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/srs_de_4_3_2_0-rl-01_qm-richtlinie-fuer-lieferanten_v1_1_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-rail-service-deutschland-gmbh_logistics-directive_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stawi_richtlinie_verladung_und_transport_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/srs_de_4_3_2_0-rl-01_qm-richtlinie-fuer-lieferanten_v1_1.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0805_supplier%20instructions_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-rail-service-deutschland-gmbh_logistik-richtlinie_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-deutschland-gmbh-logistikrichtlinie_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/bu_1426451_1_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/srs_de_4_12_1_1_rl-01_allgemeine%20verkaufsbedingungen_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_deutschland_lieferadresse_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0805_logistics%20specification_stadler_polska_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0805_logistics%20specification_stadler_polska_pl.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/gtcp_stag_star_stawi_sigch_srsch_2023_agreement_r-06d_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/materialbeistellungs-richtlinie%20der%20stadler%20rail%20service%20deutschland%20gmbh_040523.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stawi_guideline_loading_and_transport_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/fo-4_4_3_0-01%20pflichtenheft_exportkontrolle%20und%20zoll_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20service%20deutschland%20gmbh%20allgemeine%20verkaufsbedingungen%20stand%2004%202023.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/ts-0182-00_lieferspezifikation_fuer_schweiss-und-bearbeitungsbaugruppen_alle.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/checkliste_für_die_ausgangsprüfung.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/supplier%20guideline_invoices%20for%20accounting%20purposes_stadler%20rail%20service%20deutschland%20gmbh_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/lieferantenspezifikation%20schweissen.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/einkaufs-%20und%20bestellbedingungen%20stadler%20deutschland%20stand_01.2021_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/aeb_bs_stadler_deutschland_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/weisung_silikonverbot.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/einkaufs-%20und%20bestellbedingungen%20stadler%20deutschland%20stand_01.2021_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/lieferantenrichtlinie_rechnungen%20für%20die%20rechnungslegung_stadler%20deutschland%20gmbh_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/lieferspezifikationen_schweissen_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20service%20deutschland%20gmbh%20einkaufs-%20und%20bestellbedingungen%20stand%2004%202023%20final.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-deutschland-gmbh_qm-vereinbarung_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/ls_de_032024_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/lieferspezifikation_kleben_2-5_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/lieferspezifikation_kleben_2-5_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/fo4_4_1_0_11%20anforderungen_verpackung_aluminiumprofile_a_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/fo-4_4_3_0-01%20pflichtenheft_exportkontrolle%20und%20zoll_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/bu_1426451_1_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/fo4_4_1_0_11%20anforderungen_verpackung_aluminiumprofile_a_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/verhaltenskodex_fuer%20geschäftspartner_20240630_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-rail-service-deutschland-gmbh_nutzungsbedingungen_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0805_lieferanteninstruktion_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-deutschland-gmbh-logistikrichtlinie_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-deutschland-gmbh_qm-agreement_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/supplementary-conditions-of-purchase_eu-approval-processes_star.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/code_of_conduct_for_business_partners_20240630_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/229143_joint_policy_hse_e.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/statuten%20stadler%20rail_20230512_unterzeichnet.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/229143_gemeinsame_politik_hse_d.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/dse_lieferantenportal_de.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/dse_lieferantenportal_en.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/datenschutzinformation_kunden_lieferanten.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/politik-ims-stadler-praha.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_środa_strategia_podatkowa_2023.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/plan_podzialu_stadler_sroda.pdf',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/media/pdf/dbe_2023_stadler_us_inc.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/publicidad-decreto-stadler.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/política_conjunta_hse_s.pdf',
                destination:
                    '/f/269997/x/2ef3ab5a4f/publicidad-decreto-stadler-stav.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/valencia_konzession2022_es.pdf',
                destination:
                    '/f/269997/x/33819b6277/stav_concescion2022_es.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/valencia_konzession2019_es.pdf',
                destination:
                    '/f/269997/x/ea0ed357e6/valencia_consecsion_2019_es.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/publicidad-ayuda-nominativa-stadler.pdf',
                destination:
                    '/f/269997/x/a4dfedf56a/publicidad-ayuda-nominativa-stav.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/fy%202025%20dbe%20goal%20notice%20stadler%20us.pdf',
                destination:
                    '/f/269997/x/8bb97bc070/fy-2025-dbe-goal-notice-stadler-us.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-praha.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/240523_NTA%20Report_finalised_signed_SRSNO.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Compliance-Helpline-und-Whistleblowing-de.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Verhaltenskodex_Stadler_Rail_Group_DE.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Compliance_Rapporteringskanaler_visselblasning.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Compliance-Helpline-und-Whistleblowing-en.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/norwegian-transparency-act.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/statement-on-oecd-guidelines-en.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Code_of_Conduct_Stadler_Rail_Group_EN.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Modern-Slavery-Act-Statement-2023.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Normas_e_Instrucciones_Adicionales_en_materia_de_protecci_on_del_informante_ES.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/Procedimiento_de_gestión_de_comunicaciones_ES.pdf',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/media/pdf/20220901_cmd%20all%20sections_final_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_stadler%20rail%20ag_general%20assembly_invitation_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20full-year%202022%20presentation_final_online_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/sustainability_report_en_2019.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20full-year%202021%20presentation_online_final_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/20220901_cmd%20all%20sections_final_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20ag%20annual%20general%20meeting_2023.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_ag_annual_general_meeting_2024_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/gv_2024_cvs_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2021_stadler%20rail%20ag_general%20assembly_invitation_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/explanations-by-the-board-of-directors_1.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_nachhaltigkeitsbericht_2022_en_web_v5.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20half-year%202022%20presentation_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/gv%202024_protokoll_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_halbjahresbericht_2024_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_nachhaltigkeitsbericht_2022_de_web_v5.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20half-year%202021%20presentation_f1.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2021_0506_gv_protokoll_unterzeichnet.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0430_gv_protokoll_unterzeichnet.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/web_stadler_rail_gb19_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/erlaeuterungen-des-verwaltungsrats_1.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/web_stadler_rail_gb20_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_ag_generalversammlung_2024_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/presentation_half_year_2024_results_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/nachhaltigkeitsbericht_de_2019.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0903%20presentation%20half-year%20report%202019.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_gb_2023_web_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/halbjahresbericht%202020_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/web_stadler_gb_2021_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20half-year%202022%20presentation_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/web_stadler_rail_nachhaltigkeitsbericht_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/finanzbericht_2018_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0512_gv%202022_protokoll%20final.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/gv_stadler%20rail%20ag_2022.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0505_gv_protokoll_unterzeichnet.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler-rail-full-year-2020%20presentation_f.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_stadler%20rail%20ag_generalsversammlung_einladung.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/20200305%20srail%20fy%202019%20results%20presentation_final.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20half-year%202020%20presentation.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_halbjahresbericht%202021_de_final.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0903_halbjahresbericht%202019_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/gv_2024_cvs_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20ag%20generalversammlung_2023.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/gv_2024_ergebnisse_wahlen_und_abstimmungen.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_full_year_2023_presentation_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20full-year%202021%20presentation_online_final_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20-%20full-year%202022%20presentation_final_online_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_geschaeftsbericht_2022_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2021_stadler%20rail%20ag_generalversammlung_einladung_de.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_halbjahresbericht_2022_de_web%203.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/web_stadler_rail_sustainability_report_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_gb_2023_web_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/finanzbericht_2018_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0903_half-year%20report%202019_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20rail%20halbjahresbericht%202022%20en%20web_3.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/half%20year%20report%202020_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_annual_report_2022_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/web_stadler_rail_gb20_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_halbjahresbericht%202023_en_final.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/web_stadler_rail_gb19_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_halbjahresbericht%202021_en_final.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_rail_halbjahresbericht_2024_en.pdf',
                destination: '/en/investor-relations',
                permanent: true,
            },

            {
                source: '/media/pdf/(.*privacy.*)',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*Datenschutz.*)',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*datenschutz.*)',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/media/pdf/00_Polityka-prywatnosci_zewnetrzna-01-02-2024.pdf',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*Globale_Adressdatenbank.*).pdf',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/media/pdf/POLITYKA_PRYWATNOSCI_ZEWNETRZNA_SRSPL.pdf',
                destination: '/en/privacy',
                permanent: true,
            },

            {
                source: '/media/pdf/(.*iso.*)',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*zertif.*)',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*zerif.*)',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*certyf.*)',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*certif.*)',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/344378_en_srsde_ecm1_ecm2-4.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0524_communique_de_presse_cff_et_stadler_renforcent_la_liaison_vers_la_france_fr.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/100523_46486_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/330763_h46317_srsdiv_ecm1-4_it.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/322239_h38389_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_cert_15085-2_cl1_stadler_rheintal_ag_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_cert_15085-2_cl1_stadler_rheintal_ag_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/0037004-qms-spaes-ukas-2024.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/be3201220011_21080118em_atst-ecmf-valencia-1x_es.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_minsk_9k_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/341037_h60860_32_srsno_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/ecm_italien_fct1u3_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/ungarn_50001_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_en15085-cl1_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/ecm_deutschland_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/336302_h60792_srsse_ecm_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/322239_h38389_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_14001_2015_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_9001_2015_fr.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/fo1_1_2_001_qus_politik_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/341037_h60860_33_srsno_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/343877_de_27001_apx_21.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/stahlguss_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/344696_h60575_srspl_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/be3201220011_21080118em_atst-ecmf-valencia-1x_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/330763_h46317_srsdiv_ecm1-4_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/343877_en_27001_apx_21.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/330763_h46317_srsdiv_ecm1-4_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/en15085-2%20cl1%20schweißen%20-%20welding%20%20_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_14001_2015_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/stahlguss_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/din_6701_stadler_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/322239_h38389_it.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/100523_46486_it.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/be3101220010_21080118em_atst-ecm-valencia-1x_es.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_14001_2015_fr.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_minsk_9k_ru.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_9001_2015_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/en_15085_stadler_en_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/100523_46486_fr.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/0037004-qms-engus-ukas-2024.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/322239_h38389_fr.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_en15085-cl1_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/be3101220010_21080118em_atst-ecm-valencia-1x_en.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/2024-02-15%20q_bescheinigung_stadler_signalling_deutschland_gmbh_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/100523_46486_de.pdf',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_datenblatt_drehgestellrevision_de.pdf',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/media/pdf/241114_anlas_flirt_evo_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/12102017_pierwszy_flirt_stadlera_w_usa.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1113_stadler_adjusts_guidance_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2016_0922_mm_innotrans_ady_schlafwagen_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2016_1124_mm_stadler_aar_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2017_0313_mm_vbz.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2018_1107_stadler_z_zamowieniem_na_64_flirty_dla_s-bahn_hannover_pl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/30032015_nowa_era_w_pasazerskim_transporcie_kolejowym.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_04_29_stadler%20delivers%20further%20trams%20to%20mpk%20cracow_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20wins%20contract%20for%2018%20kiss%20for%20db%20regio.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/18042018_stadler_z_zamowieniem_ze_slowenii.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20250109_sicherungsanlagen%20cj_fr.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_1220_komunikat%20dla%20mediow_euro9000%20eksploatacji%20be%20i%20nl_pl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0630_stellungnahme_wasserstoffzug%20zillertal_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/12122014_dopuszczenia_dla_pociagow_db_regio_i_cfl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/18042018_stadler_vyigral_pervyi_krupnyi_kontrakt_v_slovenii.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20241213_loks%20rhb%20und%20mgbahn_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/14052015_pierwszy_dwutrakcyjny_flirt_stadlera.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1023_uta%20trax%20contract_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0602_tiskova%20zprava_stadler%20ostrava_cz.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2021_0921_stellungnahme_oebb_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_1220_persbericht_euro9000%20grensoverschrijdende%20inzet%20in%20be%20und%20nl_nl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20241017_szu_signalling_deu.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0618_etcs%20guardia%20erste%20zulassung%20polen_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202410_08_stadler%20delivers%20up%20to%2024%20battery-powered%20trains%20to%20lokaltog_pl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0716_roll%20out%20of%20first%20mav%20kiss_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/25102018_stadler_zapuskaet_novyi_flirt.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2016_0920_mm_innotrans_eurodual_uk_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/22102014_stadler_pobil_rekord_w_produkcji_pociagu_dla_szwecji.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20230606_tisková%20zpráva_prezentace%20kiss_cz.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20241024_uta%20trax%20contract_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/29032018_stadler_vdvoe_uvelichivaet_svoi_proizvodstvennye_moshchnosti_v_vengrii.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/29032018_stadler_vdvoe_uvelichivaet_svoi_proizvodstvennye_moshchnosti_v_vengrii.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_08_29_sajtokozlemeny_a_stadler_vilagujdonsaga_rs_zero_szolnoki_kocsiszekrennyel.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2018_0115_mm_vertrag_52_neue_zuge_bls_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2018_09_06_go-ahead_roll-out_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/15012018_stadler_i_bls_podpisali_kontrakt_na_postavku_52_novykh_poezdov.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/17012018_kompaniia_stadler_podpisala_dva_kontrakta_v_polshedoc.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/07062017_stadler_z_rekordowa_liczba_otrzymanych_zamowien.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/30112018_stadler_i_fnm_podpisuja_umowe_ramowa.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2016_1005_stadler_abellio_en_2.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0409_leb_et_stadler_renforcent_offre_de_transport_fr.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0529_persbericht_eerste_stadler_flirt_met_etcs_guardia_als_drielandentrein_onderweg_nl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1113_stadler_passt_guidance_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0114_Stampa_FAL_IT.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20171128_stadler_wprowadza_nowy_typ_pojazdu_wink_.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0616_option%20mälab%20transitio_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0618_etcs%20guardia%20erste%20zulassung%20polen_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/21112018_stadler_i_fnm_podpisaly_umowe_na_dostawe_pojazdow_hybrydowych.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2018_1003_anfrage_standeratskandidatur.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/17022017_stadler_z_kontraktem_dla_metra_liverpool.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2016_1005_stadler_abellio_de_2.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_11_28_mm_rbs_re_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/Stadler%20to%20deliver%20further%20TANGO%20Trams%20to%20BOGESTRA.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/25092018_stadler_wygrywa_przetarg_dla_go-ahead.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/06072016_stadler_buduje_kolejne_pociagi_metra_dla_berlina.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0228_stellungnahme%20russland,%20ukraine%20und%20belarus_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/18012018_stadler_priobretaet_swedtrac_u_knorr-bremse.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1030_pr_metro_lissabon_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_10_11_stadler_altenrhein_beantragt_kurzarbeit_fuer_119_mitarbeitende.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20241213_loks%20rhb%20und%20mgbahn_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2017_0314_mm_vertrag_eurodual_hvle_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0409_leb_und_stadler_verstaerken_nahverkehtsangebot_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_08_23_stadler%20liefert%2056%20innovative%20strassenbahnen%20an%20die%20havag.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/22032017_dwa_lata_stuprocentowej_dostepnosci_na_szwedzkich_torach.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/22062015_stadler_odczuwa_skutki_niekorzystnych_kursow_wymiany_walut.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202411_04_stadler%20uruchamia%20nowy%20zakład%20w%20białymstoku_stadler%20converter.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/03042018_giruno_prokhodit_eshche_odno_ispytanie.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler_bb_datenblätter_ubahn_j_rz.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/04042018_giruno_pojechal_z_predkoscia_275_km.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/12072018_stadler_z_dlugoterminowym_kontraktem_na_serwis_i_utrzymanie.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1030_pr_metro_lisbon_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/26112018_nowy_system_etcs_guardia_firmy_stadler_w_pociagach_dla_bls.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2017_0224_mm_beschluss_vger_zh_vbz_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20241017_szu_signalling_eng.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/03042017_stadler_z_nowym_biurem_inzynieryjnym_w_chemnitz.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20012017_sukces_stadlera_na_czeskim_rynku_tramwajowym_.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/31102018_flirt_akku_wyrusza_na_tory.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/01092016_stadler_wyprodukuje_dla_gysev_10_pociagow_flirt_nowej_generacji.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20171015_mm_flirt-energiemassnahmen_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_11_28_mm_rbs_re_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2018_0607_pervyi_kontrakt_na_innovatsionnye_lokomotivy_dlia_frantsii_ru.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/31082016_tramwaje_stadlera_zdobywaja_rosyjski_rynek.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0616_option%20mälab%20transitio_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0612_rhb_capricorn_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/merseytravel.pdf',
                destination: '/en/media/media-releases',
                permanent: true,
            },
            {
                source: '/media/pdf/2014_0415_montagestart_flughafenzuge_aeroexpress_ru_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_020_Jure%20Mikolčić%20wird%20neuer%20Geschäftsführer%20der%20Stadler%20Pankow%20GmbH.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0716_roll%20out%20of%20first%20mav%20kiss_hu.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20032015_stadler_modernizuje_flote dla_szwedzkiej_kolei.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20151222_mm_sbahn_berlin_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20092016_stadler_i_solaris_nawiazuja_wspolprace.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0616_sajtokoezlemeny_2500%20flirt_hu.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/25092014_tysieczny_flirt_dla_helsinek.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/241114_event_flirt_evo_fr.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20112018_stadler_przejmuje_udzialy_w_solaris_tram.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/datenbank-medienmitteilungen-news-de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0620_sajtóközlemény_nagysebességű.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20240327_gysev_ic_eng.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0620_sajtóközlemény_nagysebességű.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_1206_sajtóközlemény_finn%20flirt%20szolnokról.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0612_stadler_at_rail_business_days_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0915_sajtóközlemény_zoltán%20dunai_róbert%20homolya_hun.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0612_stadler_at_rail_business_days_cz.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20240627_kiss_karbantartas_szerzodes_hu.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0902_sajtóközlemény_vezetőváltás.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20240325_flirt_h2_guinness_vilagrekord.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20240604_stask_csaladbarat-fin.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20231222_szolnoki%20flirt%20lett%20a%20legmegbizhatobb%20brit%20vonat.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_1005_sajtóközlemény_első%20automata%20fogaskerekű.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20240327_gysev_ic_hun.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0217_szolnoki%20hidrogén%20vonat_futópróba.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20240318_sajtokozlemeny_flottaegysegesites.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20240531_tyneandwear_metro_feltav_hu.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0703_sajtokozlemeny_stadler_trains_zrt.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1212_caltrain%20tsssa%20contract_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1125_trinity%20metro%20dmu%20contract_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2009_0605_jahresergebnisse_stadler_ch_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/231116_formular_ruecksendung_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20170831_stadler_tcc_expo1520_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/06032018_shtadler_vyigral_pervyi_kontrakt_na_obsluzhivanie_tramvaev_v_rossii.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/Презентация%20первого%20поезда%20Stadler%20для%20Минского%20метрополитена.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/27102017_kompaniia_aeroekspress_zapustila_pervyi_dvukhetazhnyi_poezd.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/18102017_v_sankt-peterburge_vpervye_predstavlen_tramvai_chizhik.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2021_0127_stadler%20starts%20testing%20of%20the%20first%20five-car%20flirt%20for%20the%20belarusian%20railway_ru.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0721_stadler%20delivers%20the%20last%20train%20from%20the%20order%20for%20minsk%20metro_ru.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20170831_stadler_tcc_expo1520_ru.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0402_zmiany_w_zarzadzie_stadler_polska_pl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202501_08_changes%20in%20management%20of%20stadler%20prague_cz.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20180119_stadler_podpisal_z_bsl_umowe_na_dostawe_52_nowych_pociagow_flirt.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202501_08_changes%20in%20management%20of%20stadler%20prague_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/17012018_stadler_podpisal_umowe_ramowa_na_dostawe_71_ezt_dla_kolei_mazowieckich.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/16012018_konsorcjum_stadler-solaris_podpisalo_umowe_na_dostawe_tramwajow_dla_krakowa.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20180122_stadler_przejmuje_spolke_swedtrac.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0717_stadler%20entrega%20el%20primer%20tranvia%20metelitsa%20a%20bolivia_es.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0305_fachmedienpräsentation_final.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/231116_formular_ruecksendung_en.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/regulamin_oiu_stadler_service.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/dbe%202023%20stadler%20us%20inc.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/Stadler-Winterthur-AG-location-plan-en.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/Flyer_Informationsnachmittage_Stadler_St_Margrethen.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/Flyer_Informationsnachmittage_Stadler_Bussnang.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*zalacznik_nr.*)',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/Stadler_Magyarorszag_Vasuti_Karbantarto_Kft_ESZR%20_2023_osszefoglalo.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/Szakreferensi_jelentes_Stadler_Szolnok_Kft_2023_ev_kivonat.pdf',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/media/pdf/20250109_sicherungsanlagen%20cj_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0118_Пресс-релиз_Белорусской%20железной%20дороги_RU.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0320_nota%20de%20prensa_contrato%20de%20locomotoras%20eurolight%20dual%20de%20trenitalia_es.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20170925_stadler__trako2017_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_0612_rhb_capricorn_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/12052016_stadler_rocky_mountaineer.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/16062016_stadler_kontynuuje_realizacje_globalnej_strategii_rozwoju.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_02_12_MM%20Investitionen_Senat%20vor%20Ort_DE.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/15062018_ezhegodnaia_konferentsiia_kompanii_stadler_dlia_smi_ru.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_0923_nota_de_prensa_citylink_es.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/17102018_stadler_vyigral_kontrakt_na_postavku_podvizhnogo_sostava_po_individualnomu_zakazu_v_slovakiiu.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202411_04_stadler%20converter_new%20plant%20in%20poland%20opened.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202410_08_stadler%20delivers%20up%20to%2024%20battery-powered%20trains%20to%20lokaltog_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/16082018_stadler_wygrywa_przetarg_na_dostawe_71_pojazdow_dla_wales_borders.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_04_29_stadler%20liefert%20weitere%20strassenbahnen%20für%20mpk%20krakow%20in%20polen_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0716_roll%20out%20of%20first%20mav%20kiss_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/02102014_stadler_zaprezentowal_pierwszy_pociag_dla_dbregio.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/12022015_stadler_przedstawia_pierwszy_pociag_dla_metra_typu_ik.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2016_0922_mm_innotrans_ady_schlafwagen_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2021_0921_stellungnahme_oebb_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2019_0418_nota%20de%20prensa_locomotoras%20para%20vrgroup_es.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2018_09_stadler_na_innotrans_2018.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/stadler%20signs%20service%20contract%20with%20gb%20railfreight%20(april%202023).pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/08032018_kompaniia_stadler_poluchila_kontrakt_na_proizvodstvo_12_tramvaev_dlia_bolivii.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1205_marta%20cbtc%20contract_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2016_04_raphael_widmer_neuer_cfo_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/19112014_stadler_dostarczyl_do_moskwy_pierwszy_pietrowy_pociag_dla_aeroexpress.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/04052015_stadler_wyprodukuje_58_pojazdow_dla_holenderskich_kolei_panstwowych.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0602_sajtóközlemény_sbb%20510%20flirt.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/18082016_stadler_wjezdza_do_doliny_krzemowej.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/06062018_demonstratsiia_voralpen-express.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2020_12_30_premiere%20in%20der%20silvesternacht.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20250109_sicherungsanlagen%20cj_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2024_1205_marta%20cbtc%20contract_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/19052017_stadler_zaprezentowal_nowy_pociag_duzych_predkosci_giruno.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0616_komunikat%20dla%20mediow_2500%20flirt_pl.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202410_08_stadler%20delivers%20up%20to%2024%20battery-powered%20trains%20to%20lokaltog_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2023_0919_informacja%20dla%20mediów_trako%202023%20-%20stadler%20prezentuje%20najnowsze%20pojazdy%20z%20siedlec.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_0429_nota%20de%20prensa_locomotoras%20class99_es.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/14022018_stadler_postavit_8_dvukhetazhnykh_poezdov_kiss_dlia_shvetsii.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/20170925_stadler__trako2017_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/25092017_stadler_i_solaris_tram_na_trako.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2021_0506_stellungnahme_go-ahead%20bayern_de.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/2017_0314_pr_contract_eurodual_hvle_en.pdf',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/202411_04_neues%20werk%20polen_de.pdf',
                destination: '/en/media',
                permanent: true,
            },

            {
                source: '/(.*createpx.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*media.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/xls/:path*',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*Media.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*medien.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*Medien.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*comunica.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*communiqu.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*pressemit.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*ad-hoc.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*announcement.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*adhoc.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*nota.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*mitteilung.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*release.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*innotrans.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/(.*informacja.*)',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/media/pdf/:path*',
                destination: '/en/solutions',
                permanent: true,
            },

            {
                source: '/service/:path*',
                destination: '/en/solutions/service',
                permanent: true,
            },

            {
                source: '/img/:innotrans*',
                destination: '/en/',
                permanent: true,
            },
            {
                source: '/img/:innotrans*',
                destination: '/en/',
                permanent: true,
            },
            {
                source: '/css/:path*',
                destination: '/en/',
                permanent: true,
            },

            // HU REDIRECTIONS
            {
                source: '/hu/:path*',
                destination: '/en/',
                permanent: true,
            },

            // ES REDIRECTIONS
            {
                source: '/es/interno',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/es/meta/contact',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/es/medios/:path*',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/es/media/:path*',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/es/carrera/professionals/32638',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/es/meta/proveedores',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/es/sobre-nosotros',
                destination: '/en/company',
                permanent: true,
            },
            {
                source: '/es/consejo-de-administracion',
                destination: '/en/company/board-of-directors',
                permanent: true,
            },
            {
                source: '/es/comité-ejecutivo-del-grupo',
                destination: '/en/company/executive-committee',
                permanent: true,
            },
            {
                source: '/es/carrera',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/es/carrera/more-about-working-stadler',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/es/carrera/educational/:path*',
                destination: '/en/careers/open-positions',
                permanent: true,
            },
            {
                source: '/es/carrera/students/:path*',
                destination: '/en/careers/open-positions',
                permanent: true,
            },
            {
                source: '/es/carrera/professionals',
                destination: '/en/careers/open-positions',
                permanent: true,
            },
            {
                source: '/es/meta/carrera',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/es/returns',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/es/proveedores',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/es/shop',
                destination: 'https://stadlerrail.shop/en',
                permanent: true,
            },
            {
                source: '/es/sobre-nosotros/centros/:path*',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/es/sobre-nosotros',
                destination: '/en/company',
                permanent: true,
            },
            {
                source: '/es/contacto',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/es/kontakt',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/es/service/revision',
                destination: '/en/solutions/service/revisions',
                permanent: true,
            },
            {
                source: '/es/service/:path*',
                destination: '/en/solutions/service/:path*',
                permanent: true,
            },
            {
                source: '/es/referencias',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/es/referencias/highlights/:path*',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/es/referencias/descarga',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/euro6000/486',
                destination: '/en/solutions/rolling-stock/locomotive-euro6000',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/metro/59',
                destination: '/en/solutions/rolling-stock/urban-metro',
                permanent: true,
            },
            {
                source: '/es/flirt-akku/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/(.*flirt.*)',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/sali/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-sali',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/tina/:path*',
                destination: '/en/solutions/rolling-stock/urban-tina',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/eurodual/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurodual',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/kiss-200/:path*',
                destination: '/en/solutions/rolling-stock/mainline-kiss',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/kiss-160/:path*',
                destination: '/en/solutions/rolling-stock/mainline-kiss',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/ng-rangierlokomotive/:path*',
                destination:
                    '/en/solutions/rolling-stock/locomotive-central-cab',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/eurolight/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurolight',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/euro9000/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro9000',
                permanent: true,
            },
            {
                source: '/es/flirt-h2/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/euro4001/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro4001',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/cremalleras/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-rack-and-pinion-vehicles',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/locomotoras/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-locomotives',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/citylink/:path*',
                destination: '/en/solutions/rolling-stock/urban-citylink',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/trenes-automotor/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-multiple-units',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/tramlink/:path*',
                destination: '/en/solutions/rolling-stock/urban-tramlink',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/tramlink/:path*',
                destination: '/en/solutions/rolling-stock/urban-tramlink',
                permanent: true,
            },
            {
                source: '/es/productos/detail-all/:path*',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/es/productos',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/es/certificaciones',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/es/privacy-notice',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/es/edicion',
                destination: '/en/legal-notice',
                permanent: true,
            },
            {
                source: '/es/signalling/metro',
                destination: '/en/solutions/signalling/metro',
                permanent: true,
            },
            {
                source: '/es/signalling/lrv',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/es/signalling/soluciones-digitales',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/es/signalling/branchline',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/es/signalling/mainline',
                destination: '/en/solutions/signalling/mainline',
                permanent: true,
            },
            {
                source: '/es/signalling/servicios',
                destination:
                    '/en/solutions/signalling/after-sales-and-services',
                permanent: true,
            },
            {
                source: '/es/signalling/overview-signalling-es.jpg',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/es/signalling/depot',
                destination: '/en/solutions/depot',
                permanent: true,
            },
            {
                source: '/es/signalling',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/es/medios',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/es/referencias/descarga/archivo',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/es/centros',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/es/meta/contacto',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/es/:path*',
                destination: '/en/:path*',
                permanent: true,
            },

            {
                source: '/pl/:path*',
                destination: '/en/',
                permanent: true,
            },

            // NL REDIRECTS
            {
                source: '/nl/over-ons/locaties/',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/nl/:path*',
                destination: '/en/',
                permanent: true,
            },
            {
                source: '/ru/:path*',
                destination: '/en/',
                permanent: true,
            },

            // FR REDIRECTS
            {
                source: '/fr/conseil-dadministration',
                destination: '/en/company/executive-committee',
                permanent: true,
            },
            {
                source: '/fr/qui-sommes-nous/sites',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/fr/carriere/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/fr/references',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/fr/sites',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/fr/returns',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/fr/riferimenti/download/archivio',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/fr/references/download',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/fr/media',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/fr/media/article/:path*',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/fr/references/telechargement',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/fr/references/highlights/service/:path*',
                destination: '/en/solutions/service',
                permanent: true,
            },
            {
                source: '/fr/references/highlights/:path*',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/fr/fournisseurs',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/fr/meta/fournisseurs',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/fr/meta/contact',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/fr/kontakt',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/fr/qui-sommes-nous/sites/:path*',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/fr/direction-du-groupe',
                destination: '/en/company/board-of-directors',
                permanent: true,
            },
            {
                source: '/fr/certification',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/fr/carriere/professionals',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/fr/carriere/educational',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/fr/carriere/students',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/fr/carriere',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/fr/meta/carriere',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/eurolight/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurolight',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/eurodual/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurodual',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/euro6000/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro6000',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/(.*flirt.*)/:path*',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/fr/flirt-akku/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/fr/flirt-h2/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/tramlink/:path*',
                destination: '/en/solutions/rolling-stock/urban-tramlink',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/smile/:path*',
                destination: '/en/solutions/rolling-stock/mainline-smile',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/metro/:path*',
                destination: '/en/solutions/rolling-stock/urban-metro',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/Zahnradbahnen/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-rack-and-pinion-vehicles',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/tina/:path*',
                destination: '/en/solutions/rolling-stock/urban-tina',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/triebzuege/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-multiple-units',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/citylink/:path*',
                destination: '/en/solutions/rolling-stock/urban-citylink',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/euro4001/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro4001',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/(.*kiss.*)/:path*',
                destination: '/en/solutions/rolling-stock/mainline-kiss',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/euro9000/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro9000',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/ng-rangierlokomotive/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-locomotives',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/sali/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-Sali',
                permanent: true,
            },
            {
                source: '/fr/produits/detail-all/sali/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-Sali',
                permanent: true,
            },
            {
                source: '/fr/produits/:path*',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },

            {
                source: '/fr/mentions-legales',
                destination: '/en/legal-notice',
                permanent: true,
            },
            {
                source: '/fr/signalling/branchline',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/fr/signalling/prestations-de-service',
                destination:
                    '/en/solutions/signalling/after-sales-and-services',
                permanent: true,
            },
            {
                source: '/fr/signalling/lrv',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/fr/signalling/overview-signalling-fr.jpg',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/fr/signalling/solutions-numeriques',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/fr/signalling/revision',
                destination: '/en/solutions/signalling/revisions',
                permanent: true,
            },
            {
                source: '/fr/signalling/:path*',
                destination: '/en/solutions/signalling/:path*',
                permanent: true,
            },
            {
                source: '/fr/signalling',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/fr/shop',
                destination: 'https://stadlerrail.shop/en',
                permanent: true,
            },
            {
                source: '/fr/service',
                destination: '/en/solutions/service',
                permanent: true,
            },
            {
                source: '/fr/qui-sommes-nous',
                destination: '/en/company',
                permanent: true,
            },
            {
                source: '/fr/privacy-notice',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/fr/produits',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/fr/conformite',
                destination: '/en/compliance',
                permanent: true,
            },
            {
                source: '/fr/medias/:path*',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/fr/medias',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/fr/:path*',
                destination: '/en/:path*',
                permanent: true,
            },

            // IT REDIRECTS
            {
                source: '/it/chi-siamo/sedi/:path*',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/it/consiglio-di-amministrazione',
                destination: '/en/company/board-of-directors',
                permanent: true,
            },
            {
                source: '/it/direzione-del-gruppo',
                destination: '/en/company/executive-committee',
                permanent: true,
            },
            {
                source: '/it/riferimenti/:path*',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/it/shop',
                destination: 'https://stadlerrail.shop/en',
                permanent: true,
            },
            {
                source: '/it/fornitori',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/it/meta/fornitori',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/it/sedi',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/it/privacy-notice',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/it/impressum',
                destination: '/en/legal-notice',
                permanent: true,
            },
            {
                source: '/it/certificazione',
                destination: '/en/certifications',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/citylink/:path*',
                destination: '/en/solutions/rolling-stock/urban-citylink',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/Zahnradbahnen/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-rack-and-pinion-vehicles',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/(.*kiss.*)/:path*',
                destination: '/en/solutions/rolling-stock/mainline-kiss',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/(.*flirt.*)/:path*',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/it/flirt-akku/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/it/flirt-h2/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/euro6000/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro6000',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/smile/:path*',
                destination: '/en/solutions/rolling-stock/mainline-smile',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/sali/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-sali',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/Lokomotiven/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-locomotives',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/euro9000/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro9000',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/eurodual/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurodual',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/euro4001/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro4001',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/tina/:path*',
                destination: '/en/solutions/rolling-stock/urban-tina',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/metro/:path*',
                destination: '/en/solutions/rolling-stock/urban-metro',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/tramlink/:path*',
                destination: '/en/solutions/rolling-stock/urban-tramlink',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/eurolight/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurolight',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/ng-rangierlokomotive/:path*',
                destination:
                    '/en/solutions/rolling-stock/locomotive-central-cab',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/triebzuege/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-multiple-units',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/triebzuege/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-multiple-units',
                permanent: true,
            },
            {
                source: '/it/prodotti/detail-all/:path*',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/it/prodotti',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/it/carriere/professionals/:path*',
                destination: '/en/careers/open-positions',
                permanent: true,
            },
            {
                source: '/it/carriere/educational/:path*',
                destination: '/en/careers/open-positions',
                permanent: true,
            },
            {
                source: '/it/carriere/students/:path*',
                destination: '/en/careers/open-positions',
                permanent: true,
            },
            {
                source: '/it/carriere/more-about-working-stadler',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/it/carriere',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/it/meta/carriere',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/it/chi-siamo',
                destination: '/en/company',
                permanent: true,
            },
            {
                source: '/it/signalling/servizi',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/it/signalling/soluzioni-digitali',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/it/signalling/lrv',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/it/signalling/branchline',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/it/signalling/overview-signalling-it.jpg',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/it/signalling/overview-signalling-it.jpg',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/it/signalling/:path*',
                destination: '/en/solutions/signalling/:path*',
                permanent: true,
            },
            {
                source: '/it/signalling',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/it/contatto',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/it/kontakt',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/it/service/revision',
                destination: '/en/solutions/service/revisions',
                permanent: true,
            },
            {
                source: '/it/service/revision',
                destination: '/en/solutions/service/revisions',
                permanent: true,
            },
            {
                source: '/it/service/:path*',
                destination: '/en/solutions/service/:path*',
                permanent: true,
            },
            {
                source: '/it/service',
                destination: '/en/solutions/service',
                permanent: true,
            },
            {
                source: '/it/media/download-media',
                destination: '/en/downloads',
                permanent: true,
            },
            {
                source: '/it/media/atricle/:path*',
                destination: '/en/media/media-releases',
                permanent: true,
            },
            {
                source: '/it/returns',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/it/meta/contatto',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/it/:path*',
                destination: '/en/:path*',
                permanent: true,
            },

            // EN REDIRECTS
            {
                source: '/en/about-us/locations/:path*',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/en/supplier',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/en/careers/educational/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/careers/professionals/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/careers/more-about-working-stadler/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/careers/students/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/underground-trains/:path*',
                destination: '/en/solutions/rolling-stock/urban-metro',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/underground-trains/:path*',
                destination: '/en/solutions/rolling-stock/urban-metro',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/(.*kiss.*)/:path*',
                destination: '/en/solutions/rolling-stock/urban-metro',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/(.*flirt.*)/:path*',
                destination: '/en/solutions/rolling-stock/urban-metro',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/Zahnradbahnen/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-rack-and-pinion-vehicles',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/Zahnradbahnen/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-rack-and-pinion-vehicles',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/sali/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-Sali',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/eurodual/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurodual',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/ng-rangierlokomotive/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-locomotives',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/tramlink/:path*',
                destination: '/en/solutions/rolling-stock/urban-tramlink',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/euro9000/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro9000',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/eurolight/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-eurolight',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/euro4001/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro4001',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/triebzuege/:path*',
                destination:
                    '/en/solutions/rolling-stock/tailor-made-multiple-units',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/tram-trains/:path*',
                destination: '/en/solutions/rolling-stock/urban-citylink',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/euro6000/:path*',
                destination: '/en/solutions/rolling-stock/locomotive-euro6000',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/smile/:path*',
                destination: '/en/solutions/rolling-stock/mainline-smile',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/tina/:path*',
                destination: '/en/solutions/rolling-stock/urban-tina',
                permanent: true,
            },
            {
                source: '/en/flirt-h2/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/en/flirt-akku/details',
                destination: '/en/solutions/rolling-stock/mainline-flirt',
                permanent: true,
            },
            {
                source: '/en/products/detail-all/:path*',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/en/products',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/en/references',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/en/references/overview-references',
                destination: '/en/solutions',
                permanent: true,
            },
            {
                source: '/en/references/highlights/:path*',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/en/references/highlights/service/:path*',
                destination: '/en/solutions/service',
                permanent: true,
            },
            {
                source: '/en/signalling/digital-solutions',
                destination: '/en/solutions/signalling/signaltechnik',
                permanent: true,
            },
            {
                source: '/en/signalling/branchline',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/en/signalling/services',
                destination:
                    '/en/solutions/signalling/after-sales-and-services',
                permanent: true,
            },
            {
                source: '/en/signalling/lrv',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/en/signalling/lrv',
                destination: '/en/solutions/signalling/branchline-and-lrv',
                permanent: true,
            },
            {
                source: '/en/signalling/:path*',
                destination: '/en/solutions/signalling/:path*',
                permanent: true,
            },
            {
                source: '/en/signalling',
                destination: '/en/solutions/signalling',
                permanent: true,
            },
            {
                source: '/en/products',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },
            {
                source: '/en/privacy-notice',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/en/about-us/locations',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/en/about-us/locations',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/en/about-us',
                destination: '/en/company',
                permanent: true,
            },
            {
                source: '/en/meta/(.*supplier.*)',
                destination: '/en/suppliers',
                permanent: true,
            },
            {
                source: '/en/shop',
                destination: 'https://stadlerrail.shop/en',
                permanent: true,
            },
            {
                source: '/en/service/revision',
                destination: '/en/solutions/service/revisions',
                permanent: true,
            },
            {
                source: '/en/service/revision',
                destination: '/en/solutions/service/revisions',
                permanent: true,
            },
            {
                source: '/en/service/:path*',
                destination: '/en/solutions/service/:path*',
                permanent: true,
            },
            {
                source: '/en/board-directors',
                destination: '/en/company/board-of-directors',
                permanent: true,
            },
            {
                source: '/en/group-executive-board',
                destination: '/en/company/executive-committee',
                permanent: true,
            },
            {
                source: '/en/kontakt',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/en/subscribe',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/en/locations',
                destination: '/en/company/locations',
                permanent: true,
            },
            {
                source: '/en/returns',
                destination:
                    '/en/solutions/signalling/after-sales-and-services/spare-parts-and-repair-services',
                permanent: true,
            },
            {
                source: '/en/meta/contact',
                destination: '/en/contact',
                permanent: true,
            },
            {
                source: '/en/careers/educational/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/careers/professionals/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/careers/students/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/careers/more-about-working-stadler/:path*',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/meta/careers',
                destination: '/en/careers',
                permanent: true,
            },
            {
                source: '/en/media/article/:path*',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/en/media/press-releases',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/en/media/media-contacts',
                destination: '/en/media',
                permanent: true,
            },
            {
                source: '/en/privacy-notice',
                destination: '/en/privacy',
                permanent: true,
            },
            {
                source: '/en/references/overview-references/archive',
                destination: '/en/solutions/rolling-stock',
                permanent: true,
            },

            // DE REDIRECTS
            {
                source: '/de/ueber-uns/standorte/:path*',
                destination: '/de/unternehmen/standorte',
                permanent: true,
            },
            {
                source: '/de/standorte',
                destination: '/de/unternehmen/standorte',
                permanent: true,
            },
            {
                source: '/de/referenzen/:path*',
                destination: '/de/loesungen',
                permanent: true,
            },
            {
                source: '/de/signaltechnik',
                destination: '/de/loesungen/signaltechnik',
                permanent: true,
            },
            {
                source: '/de/signalling',
                destination: '/de/loesungen/signaltechnik',
                permanent: true,
            },
            {
                source: '/de/signaltechnik/:path*',
                destination: '/de/loesungen/signaltechnik',
                permanent: true,
            },
            {
                source: '/de/returns',
                destination:
                    '/de/loesungen/signaltechnik/after-sales-and-services/ersatzteil-und-reparaturservice',
                permanent: true,
            },
            {
                source: '/de/produkte',
                destination: '/de/loesungen',
                permanent: true,
            },
            {
                source: '/de/ueber-uns',
                destination: '/de/unternehmen',
                permanent: true,
            },
            {
                source: '/de/zertifizierung',
                destination: '/de/zertifizierungen',
                permanent: true,
            },
            {
                source: '/de/medien/medien-downloads',
                destination: '/de/downloads',
                permanent: true,
            },
            {
                source: '/de/verwaltungsrat',
                destination: '/de/unternehmen/verwaltungsrat',
                permanent: true,
            },
            {
                source: '/de/konzernleitung',
                destination: '/de/unternehmen/konzernleitung',
                permanent: true,
            },
            {
                source: '/de/shop',
                destination: 'https://stadlerrail.shop/de',
                permanent: true,
            },
            {
                source: '/de/medien/article/stadler-lab-ausbildungszentrum-fuer-eine-zukunftsorientierte-lehre/1565',
                destination:
                    '/de/erfolgsgesschichten/ausbildung-fuer-die-mobilitaet-fuer-morgen',
                permanent: true,
            },
            {
                source: '/de/medien/article/:path*',
                destination: '/de/medien/medienmitteilungen',
                permanent: true,
            },
            {
                source: '/de/media/article/:path*',
                destination: '/de/medien/medienmitteilungen',
                permanent: true,
            },
            {
                source: '/de/media',
                destination: '/de/medien',
                permanent: true,
            },
            {
                source: '/de/medien/medien-kontakte',
                destination: '/de/medien/medienmitteilungen',
                permanent: true,
            },
            {
                source: '/de/subscribe',
                destination: '/de/medien',
                permanent: true,
            },
            {
                source: '/de/service',
                destination: '/de/loesungen/service',
                permanent: true,
            },
            {
                source: '/de/service/revision',
                destination: '/de/loesungen/service/revisionen',
                permanent: true,
            },
            {
                source: '/de/service/spare-parts',
                destination: '/de/loesungen/service/ersatzteile',
                permanent: true,
            },
            {
                source: '/de/service/repair',
                destination: '/de/loesungen/service/reparaturen',
                permanent: true,
            },
            {
                source: '/de/service/modernisation',
                destination: '/de/loesungen/service/modernisierung',
                permanent: true,
            },
            {
                source: '/de/service/:path*',
                destination: '/de/loesungen/service/:path*',
                permanent: true,
            },
            {
                source: '/de/neuer-zulieferer',
                destination: '/de/zulieferer',
                permanent: true,
            },
            {
                source: '/de/meta/zulieferer',
                destination: '/de/zulieferer',
                permanent: true,
            },
            {
                source: '/de/bereits-zulieferer',
                destination: '/de/zulieferer',
                permanent: true,
            },
            {
                source: '/de/signalling/metro',
                destination: '/de/loesungen/signaltechnik/metro',
                permanent: true,
            },
            {
                source: '/de/signalling/branchline',
                destination: '/de/loesungen/signaltechnik/branchline-und-lrv',
                permanent: true,
            },
            {
                source: '/de/signalling/digitale-loesungen',
                destination: '/de/loesungen/signaltechnik',
                permanent: true,
            },
            {
                source: '/de/signalling/dienstleistungen',
                destination: '/de/loesungen/signaltechnik',
                permanent: true,
            },
            {
                source: '/de/signalling/lrv',
                destination: '/de/loesungen/signaltechnik/branchline-und-lrv',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/metelitsa/10',
                destination: '/de/loesungen',
                permanent: true,
            },
            {
                source: '/de/signalling/:path*',
                destination: '/de/loesungen/signaltechnik/:path*',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/metro/5',
                destination:
                    '/de/loesungen/schienenfahrzeuge/stadtverkehr-metro',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/euro6000/482',
                destination:
                    '/de/loesungen/schienenfahrzeuge/lokomotive-euro6000',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/eurolight/17',
                destination:
                    '/de/loesungen/schienenfahrzeuge/lokomotive-eurolight',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/smile/2',
                destination: '/de/loesungen/schienenfahrzeuge/vollbahnen-smile',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/wink/197',
                destination: '/de/loesungen',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/ng-rangierlokomotive/104',
                destination:
                    '/de/loesungen/schienenfahrzeuge/lokomotive-zentraler-fuehrerstand',
                permanent: true,
            },
            {
                source: '/de/flirt-h2/details',
                destination: '/de/loesungen/schienenfahrzeuge/vollbahnen-flirt',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/kiss200/53',
                destination: '/de/loesungen/schienenfahrzeuge/vollbahnen-kiss',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/tina/464',
                destination:
                    '/de/loesungen/schienenfahrzeuge/stadtverkehr-tina',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/kiss160/3',
                destination: '/de/loesungen/schienenfahrzeuge/vollbahnen-kiss',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/eurodual/18',
                destination:
                    '/de/loesungen/schienenfahrzeuge/lokomotive-eurodual',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/Zahnradbahnen/47',
                destination:
                    '/de/loesungen/schienenfahrzeuge/tailor-made-zahnradbahnen',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/variobahn/8',
                destination: '/de/loesungen',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/flirt160/13',
                destination: '/de/loesungen/schienenfahrzeuge/vollbahnen-flirt',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/Citylink/6',
                destination:
                    '/de/loesungen/schienenfahrzeuge/stadtverkehr-citylink',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/triebzuege/46',
                destination:
                    '/de/loesungen/schienenfahrzeuge/tailor-made-triebzuege',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/euro4001/491',
                destination:
                    '/de/loesungen/schienenfahrzeuge/lokomotive-euro4001',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/euro9000/473',
                destination:
                    '/de/loesungen/schienenfahrzeuge/lokomotive-euro9000',
                permanent: true,
            },
            {
                source: '/de/flirt-akku/details',
                destination: '/de/loesungen/schienenfahrzeuge/vollbahnen-flirt',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/tailor-made-lokomotiven/48',
                destination:
                    '/de/loesungen/schienenfahrzeuge/tailor-made-lokomotiven',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/flirt200/52',
                destination: '/de/loesungen/schienenfahrzeuge/vollbahnen-flirt',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/tramlink/9',
                destination:
                    '/de/loesungen/schienenfahrzeuge/stadtverkehr-tramlink',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/sali/500',
                destination: '/de/loesungen/schienenfahrzeuge/lokomotive-sali',
                permanent: true,
            },
            {
                source: '/de/produkte/detail-all/:path*',
                destination: '/de/loesungen',
                permanent: true,
            },
            {
                source: '/de/meta/karriere',
                destination: '/de/karriere',
                permanent: true,
            },
            {
                source: '/de/karriere/berufserfahrene/:path*',
                destination: '/de/karriere/offene-stellen',
                permanent: true,
            },
            {
                source: '/de/karriere/auszubildende/:path*',
                destination: '/de/karriere/offene-stellen',
                permanent: true,
            },
            {
                source: '/de/karriere/studierende/:path*',
                destination: '/de/karriere/offene-stellen',
                permanent: true,
            },
            // {
            //     source: '/de/karriere/:path*',
            //     destination: '/de/karriere/offene-stellen',
            //     permanent: true,
            // },
            {
                source: '/de/medien/article/stadler-investiert-in-die-zukunft-und-baut-ein-neues-inbetriebsetzungszentrum-fuer-zuege-in-hennigsdorf/1629/',
                destination: '/de/medien/medienmitteilungen',
                permanent: true,
            },
            {
                source: '/de/meta/kontakt',
                destination: '/de/kontakt',
                permanent: true,
            },
            {
                source: '/media/pdf/FVDAEMU0923e.pdf',
                destination: '/api/docs/x/9afb85db9e/fvdaemu0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/FVDAEMU0923i.pdf',
                destination: '/api/docs/x/6fa8e61468/fvdaemu0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/feavdmu0923_en.pdf',
                destination:
                    '/api/docs/x/2c5e062faa/flirt-dmu-hybrid-eav_en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/feavdmu0923_it.pdf',
                destination:
                    '/api/docs/x/1b67dc1499/flirt-dmu-hybrid-eav_it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/ffnmdmu0823_en.pdf',
                destination:
                    '/api/docs/x/b1889184c4/flirt-dmu-hybrid-fnm_en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/ffnmdmu0921_it.pdf',
                destination:
                    '/api/docs/x/724aa7122b/flirt-dmu-hybrid-fnm_it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/FIVDMU0923e.pdf',
                destination: '/api/docs/x/0151568085/fivdmu0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/FIVDMU0923i.pdf',
                destination: '/api/docs/x/81a2b2de2c/fivdmu0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/sbbsmile_en.pdf',
                destination: '/api/docs/x/a56791c29b/smile_sbb_en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/sbbsmile_it.pdf',
                destination: '/api/docs/x/cf84d5f359/smile_sbb_it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/LEURO9000G0822e.pdf',
                destination: '/api/docs/x/45f0a05abf/euro9000-en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/LEURO9000G0122i.pdf',
                destination: '/api/docs/x/e1c947b2a2/euro9000_it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/leurolightdualtrenitalia0423e.pdf',
                destination:
                    '/api/docs/x/7e17b39534/eurolight-dual-trenitalia-en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/leurolightdualtrenitalia0923i.pdf',
                destination:
                    '/api/docs/x/77cd2efedc/eurolight-dualtrenitalia-it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmssifemu0923_en.pdf',
                destination: '/api/docs/x/228a30f45e/tmssifemu0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmssifemu0923_it.pdf',
                destination: '/api/docs/x/bbe9349293/tmssifemu0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmarsthmu0923_en.pdf',
                destination: '/api/docs/x/9946ac56db/flirt_arst_en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmarsthmu0923_it.pdf',
                destination: '/api/docs/x/7d32bd9702/flirt_arst_it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmarstdmu0923_en.pdf',
                destination: '/api/docs/x/248ed711d4/tmarsthmu0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmarstdmu0923_it.pdf',
                destination: '/api/docs/x/322a61d2ef/tmarsthmu0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmfaldmu0923_en.pdf',
                destination: '/api/docs/x/b6b6a19e1a/tmfaldmu0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmfaldmu0923_it.pdf',
                destination: '/api/docs/x/616b62c78c/tmfaldmu0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmfalbmu0923_en.pdf',
                destination: '/api/docs/x/038bfad42a/tmfalbmu0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmfalbmu0923_it.pdf',
                destination: '/api/docs/x/9580298389/tmfalbmu0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmfdc0823_en.pdf',
                destination: '/api/docs/x/77e97f22c8/tmfdcdmu0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmfdc0921_it.pdf',
                destination: '/api/docs/x/6929c92d53/tmfdcdmu0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tmfdchmu0923_it.pdf',
                destination:
                    '/api/docs/x/fe980ef45f/tailor-made_wasserstoff-triebzug_fdc_it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/emueav0923_en.pdf',
                destination: '/api/docs/x/c5232cd2a7/metro_emu_eav_en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/emueav0923_it.pdf',
                destination: '/api/docs/x/71a119b7e1/metro_emu_eav_it.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tlatm0923_en.pdf',
                destination: '/api/docs/x/d3bd61ce92/tlatm0923e.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/tlatm0923_it.pdf',
                destination: '/api/docs/x/0209b3d1f6/tlatm0923i.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/Stadler_FLIRT_Broschuere_0621_EN_web.pdf',
                destination:
                    '/api/docs/x/6050515176/stadler_flirt_broschure_0621_en_web.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/Signalling_EN_2023_web.pdf',
                destination: '/api/docs/x/40507f73cd/signalling2024_en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/ServiceBro_2022_Gesamt_EN.pdf',
                destination:
                    '/api/docs/x/7f05f88893/servicebro_2022_gesamt_en.pdf',
                permanent: true,
            },
            {
                source: '/media/pdf/2022_Brochure%20locomotoras_EN_web.pdf',
                destination:
                    '/api/docs/x/ba439afb8c/2022_brochure-locomotoras-en-web.pdf',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
