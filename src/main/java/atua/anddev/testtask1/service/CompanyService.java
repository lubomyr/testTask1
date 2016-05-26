package atua.anddev.testtask1.service;


import atua.anddev.testtask1.entity.Company;

import java.util.List;

public interface CompanyService {
    void addCompany(Company company);
    Company getCompanyById(int id);
    List<Company> getAllCompanies();
    List<Company> getRootCompanies();
    List<Company> getCompaniesWithParent(int id);
    List<Company> getCompaniesWithChildren(int id);
    void updateCompany(Company company);
    void deleteCompany(Company company);
    void calcTotalEarnings();
}
