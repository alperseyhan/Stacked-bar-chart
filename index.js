// İlk veri seti (ESG)
const data1 = [
    { name: "Ex1", E: 0.627906977, S: 0.23255814, G: 0.139534884 },
    { name: "Ex2", E: 0.23255814, S: 0.627906977, G: 0.139534884 },
    { name: "Ex3", E: 0.6875, S: 0.1875, G: 0.125 },
    { name: "Ex4", E: 0.627906977, S: 0.139534884, G: 0.23255814 },
    { name: "Ex5", E: 0.578947368, S: 0.315789474, G: 0.105263158 },
    { name: "Ex6", E: 0.117647059, S: 0.235294118, G: 0.647058824 },
    { name: "Ex7", E: 0.26, S: 0.64, G: 0.1 },
    { name: "Ex8", E: 0.703703704, S: 0.185185185, G: 0.111111111 },
    { name: "Ex9", E: 0.153846154, S: 0.307692308, G: 0.538461538 },
    { name: "Ex10", E: 0.125, S: 0.25, G: 0.625 },
    { name: "Ex11", E: 0.7, S: 0.2, G: 0.1 },
    { name: "Ex12", E: 0.627906977, S: 0.23255814, G: 0.139534884 },
    { name: "Ex13", E: 0.125, S: 0.25, G: 0.625 },
    { name: "Ex14", E: 0.3125, S: 0.5625, G: 0.125 },
    { name: "Ex15", E: 0.627906977, S: 0.23255814, G: 0.139534884 },
    { name: "Ex16", E: 0.647058824, S: 0.235294118, G: 0.117647059 },
    { name: "Ex17", E: 0.125, S: 0.65, G: 0.225 },
    { name: "Ex18", E: 0.654545455, S: 0.254545455, G: 0.090909091 },
    { name: "Ex19", E: 0.203703704, S: 0.685185185, G: 0.111111111 },
    { name: "Ex20", E: 0.642857143, S: 0.25, G: 0.107142857 },
    { name: "Ex21", E: 0.23255814, S: 0.627906977, G: 0.139534884 },
    { name: "Ex22", E: 0.105263158, S: 0.315789474, G: 0.578947368 },
    { name: "Ex23", E: 0.660377358, S: 0.188679245, G: 0.150943396 },
    { name: "Ex24", E: 0.139534884, S: 0.23255814, G: 0.627906977 },
    { name: "Ex25", E: 0.625, S: 0.25, G: 0.125 },
    { name: "Ex26", E: 0.6875, S: 0.1875, G: 0.125 }
];

// İkinci veri seti (Kriterler)
const data2 = [
    { name: "Ex1", CE: 0.381882771, FUE: 0.150976909, EC: 0.150976909, WPWM: 0.090586146, NPC: 0.044404973, MBEM: 0.090586146, ECR: 0.090586146 },
    { name: "Ex2", CE: 0.206185567, FUE: 0.117820324, EC: 0.206185567, WPWM: 0.103092784, NPC: 0.088365243, MBEM: 0.154639175, ECR: 0.12371134 },
    { name: "Ex3", CE: 0.195348837, FUE: 0.325581395, EC: 0.195348837, WPWM: 0.097674419, NPC: 0.03255814, MBEM: 0.055813953, ECR: 0.097674419 },
    { name: "Ex4", CE: 0.16064257, FUE: 0.16064257, EC: 0.240963855, WPWM: 0.120481928, NPC: 0.060240964, MBEM: 0.096385542, ECR: 0.16064257 },
    { name: "Ex5", CE: 0.279805353, FUE: 0.158150852, EC: 0.069343066, WPWM: 0.173357664, NPC: 0.030413625, MBEM: 0.115571776, ECR: 0.173357664 },
    { name: "Ex6", CE: 0.16, FUE: 0.24, EC: 0.16, WPWM: 0.12, NPC: 0.08, MBEM: 0.12, ECR: 0.12 },
    { name: "Ex7", CE: 0.113924051, FUE: 0.227848101, EC: 0.151898734, WPWM: 0.151898734, NPC: 0.050632911, MBEM: 0.151898734, ECR: 0.151898734 },
    { name: "Ex8", CE: 0.177847114, FUE: 0.287051482, EC: 0.177847114, WPWM: 0.118564743, NPC: 0.031201248, MBEM: 0.088923557, ECR: 0.118564743 },
    { name: "Ex9", CE: 0.284023669, FUE: 0.177514793, EC: 0.118343195, WPWM: 0.177514793, NPC: 0.035502959, MBEM: 0.118343195, ECR: 0.088757396 },
    { name: "Ex10", CE: 0.142021721, FUE: 0.106516291, EC: 0.085213033, WPWM: 0.142021721, NPC: 0.037593985, MBEM: 0.142021721, ECR: 0.344611529 },
    { name: "Ex11", CE: 0.150943396, FUE: 0.150943396, EC: 0.150943396, WPWM: 0.226415094, NPC: 0.056603774, MBEM: 0.113207547, ECR: 0.150943396 },
    { name: "Ex12", CE: 0.14973262, FUE: 0.14973262, EC: 0.112299465, WPWM: 0.14973262, NPC: 0.064171123, MBEM: 0.22459893, ECR: 0.14973262 },
    { name: "Ex13", CE: 0.134513274, FUE: 0.100884956, EC: 0.134513274, WPWM: 0.134513274, NPC: 0.03539823, MBEM: 0.134513274, ECR: 0.325663717 },
    { name: "Ex14", CE: 0.16966581, FUE: 0.298200514, EC: 0.16966581, WPWM: 0.11311054, NPC: 0.051413882, MBEM: 0.084832905, ECR: 0.11311054 },
    { name: "Ex15", CE: 0.235294118, FUE: 0.156862745, EC: 0.117647059, WPWM: 0.156862745, NPC: 0.058823529, MBEM: 0.117647059, ECR: 0.156862745 },
    { name: "Ex16", CE: 0.102040816, FUE: 0.068027211, EC: 0.136054422, WPWM: 0.204081633, NPC: 0.081632653, MBEM: 0.136054422, ECR: 0.272108844 },
    { name: "Ex17", CE: 0.124444444, FUE: 0.16, EC: 0.124444444, WPWM: 0.32, NPC: 0.053333333, MBEM: 0.124444444, ECR: 0.093333333 },
    { name: "Ex18", CE: 0.177966102, FUE: 0.118644068, EC: 0.088983051, WPWM: 0.177966102, NPC: 0.042372881, MBEM: 0.305084746, ECR: 0.088983051 },
    { name: "Ex19", CE: 0.316076294, FUE: 0.179836512, EC: 0.119891008, WPWM: 0.119891008, NPC: 0.054495913, MBEM: 0.089918256, ECR: 0.119891008 },
    { name: "Ex20", CE: 0.122137405, FUE: 0.320610687, EC: 0.183206107, WPWM: 0.122137405, NPC: 0.06870229, MBEM: 0.091603053, ECR: 0.091603053 },
    { name: "Ex21", CE: 0.119891008, FUE: 0.316076294, EC: 0.179836512, WPWM: 0.119891008, NPC: 0.054495913, MBEM: 0.089918256, ECR: 0.119891008 },
    { name: "Ex22", CE: 0.11311054, FUE: 0.11311054, EC: 0.084832905, WPWM: 0.16966581, NPC: 0.051413882, MBEM: 0.16966581, ECR: 0.298200514 },
    { name: "Ex23", CE: 0.175732218, FUE: 0.117154812, EC: 0.087866109, WPWM: 0.175732218, NPC: 0.037656904, MBEM: 0.288702929, ECR: 0.117154812 },
    { name: "Ex24", CE: 0.316076294, FUE: 0.179836512, EC: 0.119891008, WPWM: 0.119891008, NPC: 0.054495913, MBEM: 0.119891008, ECR: 0.089918256 },
    { name: "Ex25", CE: 0.171428571, FUE: 0.171428571, EC: 0.114285714, WPWM: 0.114285714, NPC: 0.042857143, MBEM: 0.3, ECR: 0.085714286 },
    { name: "Ex26", CE: 0.1875, FUE: 0.09375, EC: 0.125, WPWM: 0.2625, NPC: 0.05, MBEM: 0.1875, ECR: 0.09375 }
];

// Üçüncü veri seti (Social)
const data3 = [
    { name: "Ex1", ERS: 0.125930166, TD: 0.094447624, CRSR: 0.188895249, DI: 0.0755581, SMA: 0.057240985, CR: 0.33199771, HREP: 0.125930166 },
    { name: "Ex2", ERS: 0.342789598, TD: 0.130023641, CRSR: 0.09751773, DI: 0.059101655, SMA: 0.078014184, CR: 0.195035461, HREP: 0.09751773 },
    { name: "Ex3", ERS: 0.176470588, TD: 0.294117647, CRSR: 0.117647059, DI: 0.058823529, SMA: 0.088235294, CR: 0.176470588, HREP: 0.088235294 },
    { name: "Ex4", ERS: 0.33199771, TD: 0.125930166, CRSR: 0.094447624, DI: 0.057240985, SMA: 0.0755581, CR: 0.188895249, HREP: 0.125930166 },
    { name: "Ex5", ERS: 0.185393258, TD: 0.123595506, CRSR: 0.092696629, DI: 0.123595506, SMA: 0.056179775, CR: 0.092696629, HREP: 0.325842697 },
    { name: "Ex6", ERS: 0.125930166, TD: 0.33199771, CRSR: 0.094447624, DI: 0.057240985, SMA: 0.0755581, CR: 0.188895249, HREP: 0.125930166 },
    { name: "Ex7", ERS: 0.357142857, TD: 0.107142857, CRSR: 0.142857143, DI: 0.071428571, SMA: 0.071428571, CR: 0.142857143, HREP: 0.107142857 },
    { name: "Ex8", ERS: 0.347305389, TD: 0.131736527, CRSR: 0.098802395, DI: 0.05988024, SMA: 0.065868263, CR: 0.19760479, HREP: 0.098802395 },
    { name: "Ex9", ERS: 0.174603175, TD: 0.306878307, CRSR: 0.087301587, DI: 0.116402116, SMA: 0.052910053, CR: 0.174603175, HREP: 0.087301587 },
    { name: "Ex10", ERS: 0.092592593, TD: 0.074074074, CRSR: 0.185185185, DI: 0.092592593, SMA: 0.046296296, CR: 0.185185185, HREP: 0.324074074 },
    { name: "Ex11", ERS: 0.183129856, TD: 0.12208657, CRSR: 0.12208657, DI: 0.055493896, SMA: 0.073251942, CR: 0.321864595, HREP: 0.12208657 },
    { name: "Ex12", ERS: 0.123595506, TD: 0.092696629, CRSR: 0.185393258, DI: 0.092696629, SMA: 0.056179775, CR: 0.123595506, HREP: 0.325842697 },
    { name: "Ex13", ERS: 0.179347826, TD: 0.119565217, CRSR: 0.089673913, DI: 0.089673913, SMA: 0.054347826, CR: 0.152173913, HREP: 0.315217391 },
    { name: "Ex14", ERS: 0.261261261, TD: 0.297297297, CRSR: 0.099099099, DI: 0.074324324, SMA: 0.045045045, CR: 0.148648649, HREP: 0.074324324 },
    { name: "Ex15", ERS: 0.298200514, TD: 0.16966581, CRSR: 0.11311054, DI: 0.084832905, SMA: 0.051413882, CR: 0.16966581, HREP: 0.11311054 },
    { name: "Ex16", ERS: 0.092592593, TD: 0.074074074, CRSR: 0.185185185, DI: 0.092592593, SMA: 0.046296296, CR: 0.185185185, HREP: 0.324074074 },
    { name: "Ex17", ERS: 0.107438017, TD: 0.280991736, CRSR: 0.239669421, DI: 0.080578512, SMA: 0.049586777, CR: 0.161157025, HREP: 0.080578512 },
    { name: "Ex18", ERS: 0.214285714, TD: 0.142857143, CRSR: 0.095238095, DI: 0.071428571, SMA: 0.047619048, CR: 0.142857143, HREP: 0.285714286 },
    { name: "Ex19", ERS: 0.230769231, TD: 0.153846154, CRSR: 0.115384615, DI: 0.115384615, SMA: 0.076923077, CR: 0.153846154, HREP: 0.153846154 },
    { name: "Ex20", ERS: 0.19760479, TD: 0.098802395, CRSR: 0.131736527, DI: 0.05988024, SMA: 0.065868263, CR: 0.347305389, HREP: 0.098802395 },
    { name: "Ex21", ERS: 0.205128205, TD: 0.102564103, CRSR: 0.136752137, DI: 0.051282051, SMA: 0.068376068, CR: 0.333333333, HREP: 0.102564103 },
    { name: "Ex22", ERS: 0.312331718, TD: 0.177705977, CRSR: 0.088852989, DI: 0.071082391, SMA: 0.053850296, CR: 0.118470652, HREP: 0.177705977 },
    { name: "Ex23", ERS: 0.136125654, TD: 0.136125654, CRSR: 0.102094241, DI: 0.102094241, SMA: 0.052356021, CR: 0.136125654, HREP: 0.335078534 },
    { name: "Ex24", ERS: 0.188895249, TD: 0.125930166, CRSR: 0.094447624, DI: 0.0755581, SMA: 0.057240985, CR: 0.33199771, HREP: 0.125930166 },
    { name: "Ex25", ERS: 0.244247788, TD: 0.138053097, CRSR: 0.092035398, DI: 0.069026549, SMA: 0.042477876, CR: 0.138053097, HREP: 0.276106195 },
    { name: "Ex26", ERS: 0.17414248, TD: 0.17414248, CRSR: 0.063324538, DI: 0.08707124, SMA: 0.058047493, CR: 0.17414248, HREP: 0.269129288 }
];

// Dördüncü veri seti (Governance)
const data4 = [
    { name: "Ex1", MAI: 0.045913682, FP: 0.330578512, ER: 0.12855831, ECP: 0.096418733, TD: 0.192837466, RMEP: 0.12855831, DPCS: 0.077134986 },
    { name: "Ex2", MAI: 0.061087355, FP: 0.134392181, ER: 0.354306659, ECP: 0.100794136, TD: 0.080635308, RMEP: 0.201588271, DPCS: 0.06719609 },
    { name: "Ex3", MAI: 0.052816901, FP: 0.14084507, ER: 0.105633803, ECP: 0.211267606, TD: 0.264084507, RMEP: 0.14084507, DPCS: 0.084507042 },
    { name: "Ex4", MAI: 0.037878788, FP: 0.272727273, ER: 0.106060606, ECP: 0.159090909, TD: 0.159090909, RMEP: 0.106060606, DPCS: 0.159090909 },
    { name: "Ex5", MAI: 0.094512274, FP: 0.049975012, ER: 0.129935032, ECP: 0.31984008, TD: 0.077961019, RMEP: 0.129935032, DPCS: 0.194902549 },
    { name: "Ex6", MAI: 0.083665339, FP: 0.049800797, ER: 0.139442231, ECP: 0.209163347, TD: 0.069721116, RMEP: 0.30876494, DPCS: 0.139442231 },
    { name: "Ex7", MAI: 0.076406381, FP: 0.052896725, ER: 0.308564232, ECP: 0.114609572, TD: 0.065491184, RMEP: 0.229219144, DPCS: 0.152812762 },
    { name: "Ex8", MAI: 0.106960951, FP: 0.047582, ER: 0.285229202, ECP: 0.142614601, TD: 0.061120543, RMEP: 0.142614601, DPCS: 0.213921902 },
    { name: "Ex9", MAI: 0.043668122, FP: 0.091703057, ER: 0.122270742, ECP: 0.183406114, TD: 0.31441048, RMEP: 0.122270742, DPCS: 0.122270742 },
    { name: "Ex10", MAI: 0.036418816, FP: 0.086494689, ER: 0.115326252, ECP: 0.300455235, TD: 0.172989378, RMEP: 0.115326252, DPCS: 0.172989378 },
    { name: "Ex11", MAI: 0.089918256, FP: 0.316076294, ER: 0.119891008, ECP: 0.054495913, TD: 0.119891008, RMEP: 0.119891008, DPCS: 0.179836512 },
    { name: "Ex12", MAI: 0.09375, FP: 0.052083333, ER: 0.125, ECP: 0.291666667, TD: 0.1875, RMEP: 0.125, DPCS: 0.125 },
    { name: "Ex13", MAI: 0.046728972, FP: 0.168224299, ER: 0.112149533, ECP: 0.08411215, TD: 0.308411215, RMEP: 0.112149533, DPCS: 0.168224299 },
    { name: "Ex14", MAI: 0.051413882, FP: 0.298200514, ER: 0.11311054, ECP: 0.084832905, TD: 0.16966581, RMEP: 0.11311054, DPCS: 0.16966581 },
    { name: "Ex15", MAI: 0.052631579, FP: 0.347368421, ER: 0.126315789, ECP: 0.094736842, TD: 0.189473684, RMEP: 0.126315789, DPCS: 0.063157895 },
    { name: "Ex16", MAI: 0.051282051, FP: 0.179487179, ER: 0.11965812, ECP: 0.230769231, TD: 0.179487179, RMEP: 0.11965812, DPCS: 0.11965812 },
    { name: "Ex17", MAI: 0.092696629, FP: 0.092696629, ER: 0.123595506, ECP: 0.185393258, TD: 0.056179775, RMEP: 0.325842697, DPCS: 0.123595506 },
    { name: "Ex18", MAI: 0.096330275, FP: 0.035045872, ER: 0.128440367, ECP: 0.302752294, TD: 0.096330275, RMEP: 0.19266055, DPCS: 0.128440367 },
    { name: "Ex19", MAI: 0.042881647, FP: 0.334476844, ER: 0.137221269, ECP: 0.102915952, TD: 0.162950257, RMEP: 0.137221269, DPCS: 0.082332762 },
    { name: "Ex20", MAI: 0.041152263, FP: 0.115226337, ER: 0.296296296, ECP: 0.086419753, TD: 0.172839506, RMEP: 0.115226337, DPCS: 0.172839506 },
    { name: "Ex21", MAI: 0.176470588, FP: 0.117647059, ER: 0.3, ECP: 0.070588235, TD: 0.176470588, RMEP: 0.117647059, DPCS: 0.041176471 },
    { name: "Ex22", MAI: 0.058111138, FP: 0.125907799, ER: 0.188861985, ECP: 0.217917676, TD: 0.188861985, RMEP: 0.094430993, DPCS: 0.125907799 },
    { name: "Ex23", MAI: 0.094555874, FP: 0.057306659, ER: 0.189111748, ECP: 0.217765043, TD: 0.126074499, RMEP: 0.126074499, DPCS: 0.189111748 },
    { name: "Ex24", MAI: 0.095652174, FP: 0.057971014, ER: 0.191304348, ECP: 0.127536232, TD: 0.336231884, RMEP: 0.127536232, DPCS: 0.063768116 },
    { name: "Ex25", MAI: 0.105633803, FP: 0.070422535, ER: 0.14084507, ECP: 0.246478873, TD: 0.211267606, RMEP: 0.14084507, DPCS: 0.084507042 },
    { name: "Ex26", MAI: 0.046728972, FP: 0.08411215, ER: 0.112149533, ECP: 0.308411215, TD: 0.168224299, RMEP: 0.112149533, DPCS: 0.168224299 }
];

// Performance veri seti (data5)
const data5 = [
    { name: "CE-E1", "P-DB": 0.030332114, "P-LB": 0.037072584, "P-C": 0.053923759 },
    { name: "FUE-E2", "P-DB": 0.04182381, "P-LB": 0.035389378, "P-C": 0.022520513 },
    { name: "EC-E3", "P-DB": 0.032448542, "P-LB": 0.017472292, "P-C": 0.039936668 },
    { name: "WPWM-E4", "P-DB": 0.033079345, "P-LB": 0.049619018, "P-C": 0.033079345 },
    { name: "NPC-E5", "P-DB": 0.011204991, "P-LB": 0.01213874, "P-C": 0.015873737 },
    { name: "MBEM-E6", "P-DB": 0.033405092, "P-LB": 0.033405092, "P-C": 0.017987357 },
    { name: "ECR-E7", "P-DB": 0.045153515, "P-LB": 0.034529158, "P-C": 0.005312178 },
    { name: "ERS-S1", "P-DB": 0.012609329, "P-LB": 0.005652332, "P-C": 0.048004823 },
    { name: "TD-S2", "P-DB": 0.02018445, "P-LB": 0.032338334, "P-C": 0.032338334 },
    { name: "CRSR-S3", "P-DB": 0.004943417, "P-LB": 0.021421472, "P-C": 0.018125861 },
    { name: "DI-S4", "P-DB": 0.009615406, "P-LB": 0.016025677, "P-C": 0.017094055 },
    { name: "SMA-S5", "P-DB": 0.010637579, "P-LB": 0.010637579, "P-C": 0.01227413 },
    { name: "CR-S6", "P-DB": 0.034046492, "P-LB": 0.039284414, "P-C": 0.02880857 },
    { name: "HREP-S7", "P-DB": 0.039179472, "P-LB": 0.036730755, "P-C": 0.019589736 },
    { name: "MAI-G1", "P-DB": 0.002185128, "P-LB": 0.011654018, "P-C": 0.006555385 },
    { name: "FP-G2", "P-DB": 0.021693017, "P-LB": 0.020246816, "P-C": 0.01301581 },
    { name: "ER-G3", "P-DB": 0.015075307, "P-LB": 0.016750341, "P-C": 0.023450478 },
    { name: "ECP-G4", "P-DB": 0.024673008, "P-LB": 0.015861219, "P-C": 0.015861219 },
    { name: "TD-G5", "P-DB": 0.025061078, "P-LB": 0.016707386, "P-C": 0.016707386 },
    { name: "RMEP-G6", "P-DB": 0.022284831, "P-LB": 0.010399588, "P-C": 0.014856554 },
    { name: "DPCS-G7", "P-DB": 0.017089094, "P-LB": 0.018403639, "P-C": 0.018403639 }
];

// Scenario veri seti (data6)
const data6 = [
    { name: "CE-E1", "SC-LB": 0.043813, "SC-C": 0.047183289, "SC-DB": 0.02022141 },
    { name: "FUE-E2", "SC-LB": 0.045041, "SC-C": 0.054692675, "SC-DB": 0.051475459 },
    { name: "EC-E3", "SC-LB": 0.029953, "SC-C": 0.042432709, "SC-DB": 0.019968334 },
    { name: "WPWM-E4", "SC-LB": 0.02481, "SC-C": 0.038592569, "SC-DB": 0.033079345 },
    { name: "NPC-E5", "SC-LB": 0.013072, "SC-C": 0.011204991, "SC-DB": 0.014006238 },
    { name: "MBEM-E6", "SC-LB": 0.033405, "SC-C": 0.023126602, "SC-DB": 0.030835469 },
    { name: "ECR-E7", "SC-LB": 0.045154, "SC-C": 0.031873069, "SC-DB": 0.02921698 },
    { name: "ERS-S1", "SC-LB": 0.033914, "SC-C": 0.025435495, "SC-DB": 0.039566325 },
    { name: "TD-S2", "SC-LB": 0.025871, "SC-C": 0.034494223, "SC-DB": 0.025870667 },
    { name: "CRSR-S3", "SC-LB": 0.024717, "SC-C": 0.018125861, "SC-DB": 0.008239028 },
    { name: "DI-S4", "SC-LB": 0.017094, "SC-C": 0.008547028, "SC-DB": 0.009615406 },
    { name: "SMA-S5", "SC-LB": 0.012274, "SC-C": 0.007364478, "SC-DB": 0.011455854 },
    { name: "CR-S6", "SC-LB": 0.031428, "SC-C": 0.023570648, "SC-DB": 0.02880857 },
    { name: "HREP-S7", "SC-LB": 0.031833, "SC-C": 0.017141019, "SC-DB": 0.02448717 },
    { name: "MAI-G1", "SC-LB": 0.007284, "SC-C": 0.008740513, "SC-DB": 0.007283761 },
    { name: "FP-G2", "SC-LB": 0.023139, "SC-C": 0.020246816, "SC-DB": 0.017354414 },
    { name: "ER-G3", "SC-LB": 0.025126, "SC-C": 0.021775444, "SC-DB": 0.016750341 },
    { name: "ECP-G4", "SC-LB": 0.015861, "SC-C": 0.019385935, "SC-DB": 0.02291065 },
    { name: "TD-G5", "SC-LB": 0.026732, "SC-C": 0.023390034, "SC-DB": 0.015036647 },
    { name: "RMEP-G6", "SC-LB": 0.017828, "SC-C": 0.022284831, "SC-DB": 0.011885243 },
    { name: "DPCS-G7", "SC-LB": 0.018404, "SC-C": 0.015774548, "SC-DB": 0.013145457 }
];

// ESG grafiği oluşturma fonksiyonu
function createESGChart(data, containerId, height = 800) {
    // Önceki grafiği temizle
    d3.select(containerId).html("");
    
    const margin = {top: 40, right: 100, bottom: 40, left: 60};
    const width = 960 - margin.left - margin.right;

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const color = d3.scaleOrdinal()
        .domain(["E", "S", "G"])
        .range(["#98D8BF", "#A5A6F6", "#FFC5C5"]);

    const stack = d3.stack()
        .keys(["E", "S", "G"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetExpand);

    const series = stack(data);

    // Scales
    const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    // X axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format(".0%")))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width/2)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .text("Percentage");

    // Y axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -45)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Experts");

    // Create bars and add text
    svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .each(function(d) {
            const selection = d3.select(this);
            
            selection.selectAll("rect")
                .data(d)
                .join("rect")
                .attr("x", d => x(d[0]))
                .attr("y", d => y(d.data.name))
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth());
            
            selection.selectAll("text")
                .data(d)
                .join("text")
                .attr("x", d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
                .attr("y", d => y(d.data.name) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .attr("font-size", "10px")
                .text(d => {
                    const value = d[1] - d[0];
                    return `(${value.toFixed(3)})`;
                });
        });

    // Add legend
    const legend = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(["E", "S", "G"])
        .join("g")
        .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 10})`);

    legend.append("rect")
        .attr("x", 0)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d);
}

// Kriterler grafiği oluşturma fonksiyonu
function createCriteriaChart(data, containerId, height = 800) {
    // Önceki grafiği temizle
    d3.select(containerId).html("");
    
    const margin = {top: 40, right: 100, bottom: 40, left: 60};
    const width = 960 - margin.left - margin.right;

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const color = d3.scaleOrdinal()
        .domain(["CE", "FUE", "EC", "WPWM", "NPC", "MBEM", "ECR"])
        .range([
            "#98D8BF",  // CE için açık yeşil
            "#A5A6F6",  // FUE için lavanta
            "#FFC5C5",  // EC için açık pembe
            "#FFE5B4",  // WPWM için açık sarı
            "#FFB6B6",  // NPC için açık kırmızı
            "#87CEEB",  // MBEM için açık mavi
            "#DDA0DD"   // ECR için mor
        ]);

    const stack = d3.stack()
        .keys(["CE", "FUE", "EC", "WPWM", "NPC", "MBEM", "ECR"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetExpand);

    const series = stack(data);

    // Scales
    const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    // X axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format(".0%")))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width/2)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .text("Percentage");

    // Y axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -45)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Experts");

    // Create bars and add text
    svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .each(function(d) {
            const selection = d3.select(this);
            
            selection.selectAll("rect")
                .data(d)
                .join("rect")
                .attr("x", d => x(d[0]))
                .attr("y", d => y(d.data.name))
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth());
            
            selection.selectAll("text")
                .data(d)
                .join("text")
                .attr("x", d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
                .attr("y", d => y(d.data.name) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .attr("font-size", "10px")
                .text(d => {
                    const value = d[1] - d[0];
                    return `(${value.toFixed(3)})`;
                });
        });

    // Add legend
    const legend = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(["CE", "FUE", "EC", "WPWM", "NPC", "MBEM", "ECR"])
        .join("g")
        .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 10})`);

    legend.append("rect")
        .attr("x", 0)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d);
}

// Social grafiği oluşturma fonksiyonu
function createSocialChart(data, containerId, height = 800) {
    // Önceki grafiği temizle
    d3.select(containerId).html("");
    
    const margin = {top: 40, right: 100, bottom: 40, left: 60};
    const width = 960 - margin.left - margin.right;

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const color = d3.scaleOrdinal()
        .domain(["ERS", "TD", "CRSR", "DI", "SMA", "CR", "HREP"])
        .range([
            "#FFB6B6",  // ERS için açık pembe
            "#A5A6F6",  // TD için lavanta
            "#98D8BF",  // CRSR için açık yeşil
            "#87CEEB",  // DI için açık mavi
            "#FFE5B4",  // SMA için açık sarı
            "#90EE90",  // CR için açık yeşil
            "#FFC0CB"   // HREP için pembe
        ]);

    const stack = d3.stack()
        .keys(["ERS", "TD", "CRSR", "DI", "SMA", "CR", "HREP"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetExpand);

    const series = stack(data);

    // Scales
    const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    // X axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format(".0%")))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width/2)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .text("Percentage");

    // Y axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -45)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Experts");

    // Create bars and add text
    svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .each(function(d) {
            const selection = d3.select(this);
            
            selection.selectAll("rect")
                .data(d)
                .join("rect")
                .attr("x", d => x(d[0]))
                .attr("y", d => y(d.data.name))
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth());
            
            selection.selectAll("text")
                .data(d)
                .join("text")
                .attr("x", d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
                .attr("y", d => y(d.data.name) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .attr("font-size", "10px")
                .text(d => {
                    const value = d[1] - d[0];
                    return `(${value.toFixed(3)})`;
                });
        });

    // Add legend
    const legend = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(["ERS", "TD", "CRSR", "DI", "SMA", "CR", "HREP"])
        .join("g")
        .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 10})`);

    legend.append("rect")
        .attr("x", 0)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d);
}

// Governance grafiği oluşturma fonksiyonu
function createGovernanceChart(data, containerId, height = 800) {
    // Önceki grafiği temizle
    d3.select(containerId).html("");
    
    const margin = {top: 40, right: 100, bottom: 40, left: 60};
    const width = 960 - margin.left - margin.right;

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const color = d3.scaleOrdinal()
        .domain(["MAI", "FP", "ER", "ECP", "TD", "RMEP", "DPCS"])
        .range([
            "#87CEEB",  // MAI için açık mavi
            "#FFC0CB",  // FP için açık pembe
            "#98D8BF",  // ER için açık yeşil
            "#DDA0DD",  // ECP için mor
            "#FFE5B4",  // TD için açık sarı
            "#A5A6F6",  // RMEP için lavanta
            "#FFD700"   // DPCS için sarı
        ]);

    const stack = d3.stack()
        .keys(["MAI", "FP", "ER", "ECP", "TD", "RMEP", "DPCS"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetExpand);

    const series = stack(data);

    // Scales
    const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    // X axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format(".0%")))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width/2)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .text("Percentage");

    // Y axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -45)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Experts");

    // Create bars and add text
    svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .each(function(d) {
            const selection = d3.select(this);
            
            selection.selectAll("rect")
                .data(d)
                .join("rect")
                .attr("x", d => x(d[0]))
                .attr("y", d => y(d.data.name))
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth());
            
            selection.selectAll("text")
                .data(d)
                .join("text")
                .attr("x", d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
                .attr("y", d => y(d.data.name) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .attr("font-size", "10px")
                .text(d => {
                    const value = d[1] - d[0];
                    return `(${value.toFixed(3)})`;
                });
        });

    // Add legend
    const legend = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(["MAI", "FP", "ER", "ECP", "TD", "RMEP", "DPCS"])
        .join("g")
        .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 10})`);

    legend.append("rect")
        .attr("x", 0)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d);
}

// Performance grafiği oluşturma fonksiyonu
function createPerformanceChart(data, containerId, height = 800) {
    // Önceki grafiği temizle
    d3.select(containerId).html("");
    
    const margin = {top: 40, right: 100, bottom: 40, left: 60};
    const width = 960 - margin.left - margin.right;

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const color = d3.scaleOrdinal()
        .domain(["P-DB", "P-LB", "P-C"])
        .range([
            "#98D8BF",  // P-DB için açık yeşil
            "#FFC0CB",  // P-LB için açık pembe
            "#A5A6F6"   // P-C için lavanta
        ]);

    const stack = d3.stack()
        .keys(["P-DB", "P-LB", "P-C"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetExpand);

    const series = stack(data);

    // Scales
    const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    // X axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format(".0%")))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width/2)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .text("Percentage");

    // Y axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -45)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Experts");

    // Create bars and add text
    svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .each(function(d) {
            const selection = d3.select(this);
            
            selection.selectAll("rect")
                .data(d)
                .join("rect")
                .attr("x", d => x(d[0]))
                .attr("y", d => y(d.data.name))
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth());
            
            selection.selectAll("text")
                .data(d)
                .join("text")
                .attr("x", d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
                .attr("y", d => y(d.data.name) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .attr("font-size", "10px")
                .text(d => {
                    const value = d[1] - d[0];
                    return `(${value.toFixed(3)})`;
                });
        });

    // Add legend
    const legend = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(["P-DB", "P-LB", "P-C"])
        .join("g")
        .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 10})`);

    legend.append("rect")
        .attr("x", 0)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d);
}

// Scenario grafiği oluşturma fonksiyonu
function createScenarioChart(data, containerId, height = 800) {
    // Önceki grafiği temizle
    d3.select(containerId).html("");
    
    const margin = {top: 40, right: 100, bottom: 40, left: 60};
    const width = 960 - margin.left - margin.right;

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const color = d3.scaleOrdinal()
        .domain(["SC-LB", "SC-C", "SC-DB"])
        .range([
            "#98D8BF",  // SC-LB için açık yeşil
            "#FFC0CB",  // SC-C için açık pembe
            "#A5A6F6"   // SC-DB için lavanta
        ]);

    const stack = d3.stack()
        .keys(["SC-LB", "SC-C", "SC-DB"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetExpand);

    const series = stack(data);

    // Scales
    const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    // X axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format(".0%")))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width/2)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .text("Percentage");

    // Y axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -45)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Experts");

    // Create bars and add text
    svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .each(function(d) {
            const selection = d3.select(this);
            
            selection.selectAll("rect")
                .data(d)
                .join("rect")
                .attr("x", d => x(d[0]))
                .attr("y", d => y(d.data.name))
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth());
            
            selection.selectAll("text")
                .data(d)
                .join("text")
                .attr("x", d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
                .attr("y", d => y(d.data.name) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .attr("font-size", "10px")
                .text(d => {
                    const value = d[1] - d[0];
                    return `(${value.toFixed(3)})`;
                });
        });

    // Add legend
    const legend = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(["SC-LB", "SC-C", "SC-DB"])
        .join("g")
        .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 10})`);

    legend.append("rect")
        .attr("x", 0)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d);
}

// Sayfa yüklendiğinde çalışacak kod
window.onload = function() {
    // Buton click handler'ları
    const buttons = ['btnData1', 'btnData2', 'btnData3', 'btnData4', 'btnData5', 'btnData6'];
    const charts = ['chart1', 'chart2', 'chart3', 'chart4', 'chart5', 'chart6'];

    buttons.forEach((btnId, index) => {
        document.getElementById(btnId).addEventListener('click', function() {
            // Tüm butonların active class'ını kaldır
            buttons.forEach(id => {
                document.getElementById(id).classList.remove('active');
            });
            // Tıklanan butona active class'ı ekle
            this.classList.add('active');

            // Tüm grafikleri gizle
            charts.forEach(chartId => {
                document.getElementById(chartId).classList.remove('active');
            });
            // İlgili grafiği göster
            document.getElementById(charts[index]).classList.add('active');
        });
    });

    // Grafikleri oluştur
    createESGChart(data1, "#chart1", 800);
    createCriteriaChart(data2, "#chart2", 800);
    createSocialChart(data3, "#chart3", 800);
    createGovernanceChart(data4, "#chart4", 800);
    createPerformanceChart(data5, "#chart5", 800);
    createScenarioChart(data6, "#chart6", 800);
};
